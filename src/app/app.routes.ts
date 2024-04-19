import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./core/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./core/settings/settings.component').then(
        (m) => m.SettingsComponent
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
