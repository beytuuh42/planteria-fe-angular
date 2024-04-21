import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { IUser } from '@app/core/models/user.model';
import { Observable, catchError } from 'rxjs';
import { ILoginUser } from '@app/core/models/loginuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<IUser> {
  constructor(http: HttpClient) {
    super(http);
  }

  override getResourceUrl(): string {
    return 'auth';
  }

  login(user: ILoginUser): Observable<ILoginUser> {
    return this.httpClient
      .post<IUser>(`${this.baseUrl}/${this.getResourceUrl()}/login`, user, {
        withCredentials: true,
      })
      .pipe(catchError(super.handleError));
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${this.baseUrl}/${this.getResourceUrl()}/register`, user)
      .pipe(catchError(super.handleError));
  }

  logout(): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${this.getResourceUrl()}/logout`, null, {
        withCredentials: true,
      })
      .pipe(catchError(super.handleError));
  }
}
