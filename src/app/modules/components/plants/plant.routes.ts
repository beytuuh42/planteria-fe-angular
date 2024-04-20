import { Routes } from '@angular/router';
import { PlantListComponent } from './pages/plant-list/plant-list.component';
import { PlantDetailComponent } from './pages/plant-detail/plant-detail.component';

export const PLANT_ROUTES: Routes = [
  {
    path: '',
    component: PlantListComponent,
  },
  {
    path: ':id',
    component: PlantDetailComponent,
  },
];
