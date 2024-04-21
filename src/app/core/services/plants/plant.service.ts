import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlant } from '../../models/plant.model';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PlantService extends BaseService<IPlant> {
  constructor(private http: HttpClient) {
    super(http);
  }

  override getResourceUrl(): string {
    return 'plants';
  }
}
