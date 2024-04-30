import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
  Observable,
  Subject,
  catchError,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Router } from '@angular/router';
import { IResponseToken } from '../models/response-token.model';

function addTokenToHeader(
  req?: HttpRequest<unknown>,
  token?: string
): HttpRequest<unknown> {
  return req!.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  let refreshTokenInProgress = false;
  let tokenRefreshedSource = new Subject();
  let tokenRefreshed$ = tokenRefreshedSource.asObservable();

  const refreshToken = (): Observable<IResponseToken> => {
    if (refreshTokenInProgress) {
      return new Observable((observer) => {
        tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      refreshTokenInProgress = true;
      return authService.refreshToken().pipe(
        tap((token) => {
          refreshTokenInProgress = false;
          tokenRefreshedSource.next(token);
        }),
        catchError((err) => {
          refreshTokenInProgress = false;
          throw err;
        })
      );
    }
  };

  const handleResponseError = (
    error: HttpErrorResponse,
    request?: HttpRequest<unknown>,
    next?: HttpHandlerFn
  ) => {
    if (error.status === 400) {
    } else if (error.status === 401) {
      return refreshToken().pipe(
        switchMap((token) => {
          let newRequest: HttpRequest<unknown> = addTokenToHeader(
            request,
            token.access
          );
          return next!(newRequest);
        }),
        catchError((e: HttpErrorResponse): Observable<any> => {
          if (e.status !== 401) {
            return handleResponseError(e);
          } else {
            authService.logout();
            router.navigate(['login']);
            throw e;
          }
        })
      );
    } else if (error.status === 403) {
      throw error;
    }

    // Server error
    else if (error.status === 500) {
      throw error;
    }

    // Maintenance error
    else if (error.status === 503) {
      throw error;
    }

    return throwError(() => error);
  };

  const token = authService.getAccessToken();
  //if (!token) router.navigate(['login']);
  let newReq = addTokenToHeader(req, token);

  return next(newReq).pipe(
    catchError((err: HttpErrorResponse) => {
      switch (err.status) {
        case 401:
          console.error('401: Unallowed access!', err);
          return handleResponseError(err, newReq, next);
        default:
          return throwError(() => err);
      }
    })
  );
};
