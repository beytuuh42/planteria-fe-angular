import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPlant } from '@app/core/models/plant.model';
import { PlantService } from '@app/core/services/plants/plant.service';
import { Observable, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [RouterLink, JsonPipe, AsyncPipe],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss',
})
export class PlantListComponent {
  private modalService = inject(NgbModal);
  protected plantService = inject(PlantService);


  plants$!: Observable<IPlant[]>;

  ngOnInit(): void {
    this.plants$ = this.plantService.getList();
  }

  onEdit(content: TemplateRef<any>, plant: IPlant) {
    // const modalRef = this.modalService.open(content, { size: 'lg' });
    // console.log(plant);
    // console.log('modalRef.componentInstance:', modalRef.componentInstance);
    // modalRef.componentInstance.plant = plant;
  }
}
