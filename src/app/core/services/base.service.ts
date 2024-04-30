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

    return this.httpClient
      .get<T[]>(url)
      .pipe(catchError((err) => throwError(() => err)));
  }

  get(id: number): Observable<T> {
    return this.httpClient
      .get<T>(this.getEndpoint(id))
      .pipe(catchError((err) => throwError(() => err)));
  }

  add(resource: T): Observable<any> {
    return this.httpClient
      .post(this.getEndpoint(), resource)
      .pipe(catchError((err) => throwError(() => err)));
  }

  update(resource: T) {
    return this.httpClient
      .put(this.getEndpoint(), resource)
      .pipe(catchError((err) => throwError(() => err)));
  }
  delete(id: number): Observable<any> {
    return this.httpClient
      .delete(this.getEndpoint(id))
      .pipe(catchError((err) => throwError(() => err)));
  }
}
