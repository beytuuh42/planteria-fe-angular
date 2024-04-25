import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { IBase } from '../models/base.model';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  protected abstract resource: string;

  constructor(protected httpClient: HttpClient) {}

  getBaseUrl(): string {
    return environment.baseUrl;
  }

  getBaseApiUrl(): string {
    return environment.baseApiUrl;
  }

  protected getEndpoint(id?: number): string {
    if (id) {
      return `${this.getBaseApiUrl()}/${this.resource}/${id}`;
    } else {
      return `${this.getBaseApiUrl()}/${this.resource}`;
    }
  }

  getList(url: string = this.getEndpoint()): Observable<T[]> {
    // let params = new HttpParams()
    // 	.set('page', page.toString())
    // 	.set('count', count.toString());

    return this.httpClient.get<T[]>(url).pipe(catchError(this.handleError));
  }

  get(id: number): Observable<T> {
    return this.httpClient
      .get<T>(this.getEndpoint(id))
      .pipe(catchError(this.handleError));
  }

  add(resource: T): Observable<any> {
    return this.httpClient
      .post(this.getEndpoint(), resource)
      .pipe(catchError(this.handleError));
  }

  update(resource: T) {
    return this.httpClient
      .put(this.getEndpoint(), resource)
      .pipe(catchError(this.handleError));
  }
  delete(id: number): Observable<any> {
    return this.httpClient
      .delete(this.getEndpoint(id))
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
