import {
  HttpClient,
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '@app/core/models/user.model';
import {
  EMPTY,
  Observable,
  catchError,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ILoginUser } from '@app/core/models/login-user.model';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {
  ERROR_AUTH_INVALID_CREDENTIALS,
  ERROR_AUTH_INVALID_TOKEN,
  ERROR_AUTH_NOT_LOGGED_IN,
} from '@app/core/constants/errors';
import { IResponseToken } from '@app/core/models/response-token.model';
import { IDecodedToken } from '@app/core/models/decoded-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  protected override resource = 'auth';

  cookieService = inject(CookieService);
  router = inject(Router);

  constructor(http: HttpClient) {
    super(http);
  }

  private getDecodedToken(isAccess: boolean): IDecodedToken | null {
    const token = isAccess ? this.getAccessToken() : this.getRefreshToken();
    if (!token) return null;

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) return null;

    const encodedPayload = tokenParts[1];
    try {
      const decodedPayload = window.atob(encodedPayload);
      const payloadJson = JSON.parse(decodedPayload);
      const { token_type, exp, iat, jti, user_id } = payloadJson;

      // Validate required properties
      if (
        typeof token_type !== 'string' ||
        typeof exp !== 'number' ||
        typeof iat !== 'number' ||
        typeof jti !== 'string' ||
        typeof user_id !== 'number'
      ) {
        return null;
      }

      return {
        token_type,
        exp,
        iat,
        jti,
        user_id,
      };
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isLoggedIn(): boolean {
    const token = this.getDecodedToken(true) || this.getDecodedToken(false);

    if (!token) return false;
    
    const currentTime = Math.floor(Date.now() / 1000);
    return token.exp > currentTime;
  }

  login(user: ILoginUser): Observable<IResponseToken> {
    return this.httpClient
      .post<IResponseToken>(`${this.getEndpoint()}/login`, user, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          if (response.access && response.refresh) {
            this.cookieService.set('access_token', response.access);
            this.cookieService.set('refresh_token', response.refresh);
          }
        }),
        catchError((err: any) => {
          return throwError(() =>
            console.error('Login error in authservice:', err)
          );
        })
      );
  }

  refreshToken(): Observable<IResponseToken> {
    return this.httpClient
      .post<IResponseToken>(
        `${this.getEndpoint()}/login/refresh`,
        { refresh: this.getRefreshToken() },
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap((response) => {
          if (response.access && response.refresh) {
            this.cookieService.set('access_token', response.access);
            this.cookieService.set('refresh_token', response.refresh);
            console.log('Refreshed token');
          } else {
            console.log('Failed to retrieve refreshed token!');
          }
        }),
        catchError(super.handleError)
      );
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${this.getEndpoint()}/register`, user)
      .pipe(catchError(super.handleError));
  }

  logout(): Observable<any> {
    return this.httpClient
      .post(`${this.getEndpoint()}/logout`, null, {
        withCredentials: true,
      })
      .pipe(catchError(super.handleError));
  }

  getAccessToken(): string {
    return this.cookieService.get('access_token');
  }

  getRefreshToken(): string {
    return this.cookieService.get('refresh_token');
  }

  private handleInvalidToken(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    return this.refreshToken().pipe(
      switchMap(() => {
        console.log('Token refresh successful');
        const newReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.getAccessToken()}`,
          },
        });
        return next(newReq);
      }),
      catchError((refreshError: any) => {
        console.error('Token refresh failed:', refreshError);
        this.router.navigate(['login']);
        return EMPTY;
      })
    );
  }

  handleAuthError(
    error: HttpErrorResponse,
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
  ): Observable<any> {
    if (error.status === 401) {
      if (error.error.detail.includes(ERROR_AUTH_INVALID_CREDENTIALS)) {
        console.error('Invalid credentials');
        return throwError(() => new Error('Invalid credentials.'));
      } else if (error.error.code === ERROR_AUTH_INVALID_TOKEN) {
        console.error('Token expired or invalid, attempting token refresh...');
        return this.handleInvalidToken(request, next);
      } else if (error.error.code === ERROR_AUTH_NOT_LOGGED_IN) {
        console.error('Token expired or invalid, attempting token refresh...');
        this.router.navigate(['login']);
        return EMPTY;
      }
    } else {
      console.error(
        `Backend returned auth code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened in auth; please try again later.')
    );
  }
}
