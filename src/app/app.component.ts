import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tutoriales-de-Angular';

  ngOnInit(): void {
    // Verificar si estamos en el navegador antes de acceder a 'document' o 'window'
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Inicializar Flowbite
      initFlowbite();

      // --- Lógica para el tema oscuro/claro (idéntica a tu código) ---

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.getItem('color-theme') === 'dark' || 
          (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Change the icons inside the button based on previous settings
      const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
      const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

      if (localStorage.getItem('color-theme') === 'dark' || 
          (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon!.classList.remove('hidden');
      } else {
        themeToggleDarkIcon!.classList.remove('hidden');
      }

      const themeToggleBtn = document.getElementById('theme-toggle');

      themeToggleBtn!.addEventListener('click', () => {
        // Toggle icons inside button
        themeToggleDarkIcon!.classList.toggle('hidden');
        themeToggleLightIcon!.classList.toggle('hidden');

        // If set via local storage previously
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
          }

        // If NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
          }
        }
      });

      
      
    } // Fin del bloque 'if' para verificar el entorno
  }
}