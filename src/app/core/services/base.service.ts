import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseCrudService<T> extends ApiService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
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
}
