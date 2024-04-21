import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPlant } from '@app/core/models/plant.model';
import { PlantService } from '@app/core/services/plants/plant.service';
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
  plants: IPlant[] = [];

  ngOnInit(): void {
    this.plantService
      .getList()
      .pipe(
        tap((data) => {
          console.log(data);
        })
      )
      .subscribe((data) => {
        this.plants = data;
      });

    this.plantService.getList().subscribe((data) => {
      this.plants = data;
    });
  }

  onEdit(content: TemplateRef<any>, plant: IPlant) {
    const modalRef = this.modalService.open(content, { size: 'lg' });
    console.log(plant);
    console.log('modalRef.componentInstance:', modalRef.componentInstance);

    modalRef.componentInstance.plant = plant;
  }
}
