import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

const cache = new Map<string, HttpEvent<unknown>>();

export const cacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  if (req.method !== 'GET') return next(req);

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
