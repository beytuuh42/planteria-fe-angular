import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
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
