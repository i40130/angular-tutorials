import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'equipo',
    loadComponent: () => import('./pages/equipo/equipo.component').then(m => m.EquipoComponent)
  },
  {
    path: 'referencias',
    loadComponent: () => import('./pages/referencias/referencias.component').then(m => m.ReferenciasComponent)
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faqs/faqs.component').then(m => m.FaqsComponent)
  }
];
