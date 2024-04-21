import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { IBase } from '../models/base.model';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>(
  'ServiceConfig'
);

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  protected readonly baseUrl = environment.baseUrl;

  abstract getResourceUrl(): string;

  constructor(protected httpClient: HttpClient) {}

  //getList(page: number, count: number): Observable<T[]> {
  getList(): Observable<T[]> {
    // let params = new HttpParams()
    // 	.set('page', page.toString())
    // 	.set('count', count.toString());

    return this.httpClient
      .get<T[]>(`/${this.baseUrl}/${this.getResourceUrl()}`)
      .pipe(catchError(this.handleError));
  }

  get(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.baseUrl}/${this.getResourceUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  add(resource: T): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${this.getResourceUrl}`, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource: T) {
    return this.httpClient
      .put(`${this.baseUrl}/${this.getResourceUrl}`, resource)
      .pipe(catchError(this.handleError));
  }
  delete(id: string | number): Observable<any> {
    return this.httpClient
      .delete(`${this.baseUrl}/${this.getResourceUrl}`)
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
