import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { IUser } from '@app/core/models/user.model';
import { Observable, catchError } from 'rxjs';
import { ILoginUser } from '@app/core/models/login-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<IUser> {
  protected override resource = 'auth';
  constructor(http: HttpClient) {
    super(http);
  }

  login(user: ILoginUser): Observable<ILoginUser> {
    return this.httpClient
      .post<IUser>(`${this.getEndpoint()}/login`, user, {
        withCredentials: true,
      })
      .pipe(catchError(super.handleError));
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
}
