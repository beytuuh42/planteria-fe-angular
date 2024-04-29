import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

const cache = new Map<string, HttpEvent<unknown>>();

export const cacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);

  // is it ok/necessary to check for logged in everytime?
  // if not checking though, the cache will show data regardless of auth

  if (req.method !== 'GET' || !authService.isLoggedIn()) return next(req);

  const cachedResponse = cache.get(req.url);
  if (cachedResponse) return of(cachedResponse);
  else {
    return next(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) cache.set(req.url, res);
      })
    );
  }
};
