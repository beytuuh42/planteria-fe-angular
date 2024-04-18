import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getAllPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${environment.REST_API_URL}/plants`);
  }
}
