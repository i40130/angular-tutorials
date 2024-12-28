import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Añadimos el cliente HTTP
import { provideRouter } from '@angular/router'; // Para las rutas
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Las rutas actuales
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig, // Conserva el resto de tu configuración
  providers: [
    provideRouter(routes),  // Proveer rutas
    provideHttpClient()     // Proveer HttpClient
  ]
}).catch(err => console.error(err));