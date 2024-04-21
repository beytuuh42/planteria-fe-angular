import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    let endpoint = `${environment.baseUrl}/plants`;
    return this.http.get<Plant[]>(endpoint).pipe(catchError(this.handleError));
  }

  getPlant(id: number): Observable<Plant> {
    let endpoint = `${environment.baseUrl}/plants/${id}`;
    return this.http.get<Plant>(endpoint).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
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
