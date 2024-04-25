import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { IPlant } from '@app/core/models/plant.model';
import { IPlantImage } from '@app/core/models/plant-image.model';
import { PlantService } from '@app/core/services/plants/plant.service';
@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [NgbCarouselModule, AsyncPipe],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.scss',
})
export class PlantDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  protected plantService = inject(PlantService);

  plant$!: Observable<IPlant>;
  plantImages$!: Observable<IPlantImage[]>;

  ngOnInit(): void {
    const plantId = Number(this.route.snapshot.paramMap.get('id'));

    this.plant$ = this.plantService.get(plantId);
    this.plantImages$ = this.plant$.pipe(
      switchMap((plant) => this.plantService.getImagesList(plant.id))
    );
  }
}
