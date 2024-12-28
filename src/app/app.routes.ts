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
  },
  {
    path: 'angular-v18/:id',
    loadComponent: () => import('./pages/content-tutorial/content-tutorial.component').then(m => m.ContentTutorialComponent)
  },
  {
    path: 'en-construccion',
    loadComponent: () => import('./pages/en-construccion/en-construccion.component').then(m => m.EnConstruccionComponent)
  }
];