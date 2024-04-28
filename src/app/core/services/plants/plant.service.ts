import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlant } from '../../models/plant.model';
import { Observable, catchError, throwError, tap } from 'rxjs';
import { environment } from 'environments/environment';
import { BaseCrudService } from '../base.service';
import { IPlantImage } from '@app/core/models/plant-image.model';

@Injectable({
  providedIn: 'root',
})
export class PlantService extends BaseCrudService<IPlant> {
  protected override resource = 'plants';

  constructor(private http: HttpClient) {
    super(http);
  }

  getImagesList(plantId: number): Observable<IPlantImage[]> {
    const endpoint = `${this.getEndpoint(plantId)}/images`;
    let obs = this.getList(endpoint) as unknown as Observable<IPlantImage[]>;
    obs.pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
    return obs;
  }
}
