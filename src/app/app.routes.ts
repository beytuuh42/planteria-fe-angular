import { Routes } from '@angular/router';

import { ErrorComponent } from './core/pages/error/error.component';
import { HomeComponent } from './modules/components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'plants',
    loadChildren: () =>
      import('./modules/components/plants/plant.routes').then(
        (m) => m.PLANT_ROUTES
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./core/pages/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/components/auth/auth.routes').then(
        (m) => m.AUTH_ROUTES
      ),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];
