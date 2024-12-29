import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Añadimos el cliente HTTP
import { provideRouter, withHashLocation } from '@angular/router'; // Añadimos soporte para hash
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Las rutas actuales
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig, // Conserva el resto de tu configuración
  providers: [
    provideRouter(routes, withHashLocation()), // Usa el modo hash para las rutas
    provideHttpClient()                         // Proveer HttpClient
  ]
}).catch(err => console.error(err));