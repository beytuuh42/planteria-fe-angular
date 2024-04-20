import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '@app/core/models/plant.model';
import { PlantService } from '@app/core/services/plant.service';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.scss',
})
export class PlantDetailComponent {
  private plantService = inject(PlantService);
  route = inject(ActivatedRoute);
  plant: Plant | undefined;

  constructor() {
    const plantId = Number(this.route.snapshot.paramMap.get('id'));
    this.plantService.getPlant(plantId).subscribe((data) => {
      this.plant = data;
    })
  }
}
