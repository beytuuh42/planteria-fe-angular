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
  Subject,
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
  private readonly accessTokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';

  cookieService = inject(CookieService);
  router = inject(Router);

  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${this.getEndpoint()}/register`, user)
      .pipe(catchError((err) => throwError(() => err)));
  }

  login(user: ILoginUser): Observable<IResponseToken> {
    return this.httpClient
      .post<IResponseToken>(`${this.getEndpoint()}/login`, user, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => this.setTokens(response)),
        catchError((err: any) => {
          return throwError(() => err);
        })
      );
  }

  logout(): Observable<any> {
    return this.httpClient
      .post(
        `${this.getEndpoint()}/logout`,
        { refresh: this.getRefreshToken() },
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap({
          complete: () => {
            this.setTokens({ access: '', refresh: '' });
          },
        })
      );
  }

  refreshToken(): Observable<IResponseToken> {
    console.log('Attempting token refresh...');
    return this.httpClient
      .post<IResponseToken>(
        `${this.getEndpoint()}/login/refresh`,
        { refresh: this.getRefreshToken() },
        { withCredentials: true }
      )
      .pipe(
        tap((response) => this.setTokens(response)),
        catchError((error) => {
          console.error('Error refreshing token:', error);
          return throwError(() => error);
        })
      );
  }

  private setTokens(token: IResponseToken): void {
    this.cookieService.set(this.accessTokenKey, token.access);
    this.cookieService.set(this.refreshTokenKey, token.refresh);
  }

  getAccessToken(): string {
    return this.cookieService.get(this.accessTokenKey);
  }

  private getRefreshToken(): string {
    return this.cookieService.get(this.refreshTokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getDecodedToken(true) || this.getDecodedToken(false);

    if (!token) return false;

    const currentTime = Math.floor(Date.now() / 1000);
    return token.exp > currentTime;
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

  handleAuthError(
    error: HttpErrorResponse,
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
  ): Observable<any> {
    if (error.error.detail.includes(ERROR_AUTH_INVALID_CREDENTIALS)) {
      return throwError(() => new Error('Invalid credentials.'));
    } else if (error.error.code === ERROR_AUTH_INVALID_TOKEN) {
      return EMPTY;
      //return this.handleInvalidToken(error, request, next);
    } else if (error.error.code === ERROR_AUTH_NOT_LOGGED_IN) {
      console.error('Token expired or invalid, attempting token refresh...');
      this.router.navigate(['login']);
      return throwError(() => new Error('Invalid token.'));
    }

    return throwError(() => new Error('Unhandled auth error.'));
  }
}
