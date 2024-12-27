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

      // --- Lógica para generar el índice dinámico ---
      const tocList = document.getElementById('toc-list'); // Contenedor del índice

      // Seleccionar encabezados **SOLO DENTRO DEL ARTICLE**
      const article = document.querySelector('article'); // Seleccionamos el <article>
      const headers = article?.querySelectorAll('h2, h3'); // Solo encabezados dentro del article

      let currentH2List: HTMLUListElement | null = null;

      headers?.forEach(header => {
        // Crear enlace para el encabezado
        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent || '';
        link.className = "block py-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500";

        // Crear elemento de lista
        const listItem = document.createElement('li');

        if (header.tagName === 'H2') {
          // Añadir h2 como nivel principal
          listItem.appendChild(link);
          tocList?.appendChild(listItem);

          // Crear sublista para h3
          currentH2List = document.createElement('ul');
          currentH2List.className = "pl-4 border-l-2 border-blue-500 space-y-1";
          listItem.appendChild(currentH2List);
        } else if (header.tagName === 'H3' && currentH2List) {
          // Añadir h3 dentro del último h2
          const subItem = document.createElement('li');
          subItem.appendChild(link);
          currentH2List.appendChild(subItem);
        }
      });
    } // Fin del bloque 'if' para verificar el entorno
  }
}