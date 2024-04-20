import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '@app/core/models/plant.model';
import { PlantService } from '@app/core/services/plant.service';
import { tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss',
})
export class PlantListComponent {
  private modalService = inject(NgbModal);

  plantService = inject(PlantService);
  plants: Plant[] = [];

  ngOnInit(): void {
    this.plantService
      .getPlants()
      .pipe(
        tap((data) => {
          console.log(data);
        })
      )
      .subscribe((data) => {
        this.plants = data;
      });

    this.plantService.getPlants().subscribe((data) => {
      this.plants = data;
    });
  }

  onEdit(content: TemplateRef<any>, plant: Plant) {
    const modalRef = this.modalService.open(content, { size: 'lg' });
    console.log(plant)
    console.log('modalRef.componentInstance:', modalRef.componentInstance);

    modalRef.componentInstance.plant = plant;
  }
}
