import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Para usar directivas como *ngIf, etc.
import { RouterModule } from '@angular/router'; // Para enlaces con routerLink
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite'; // IMPORTANTE para que el sidenav de la izquierda se pueda cargar bien
import { Subscription } from 'rxjs'; // Para gestionar las suscripciones

@Component({
  selector: 'app-content-tutorial',
  standalone: true,
  templateUrl: './content-tutorial.component.html',
  styleUrls: ['./content-tutorial.component.css'],
  imports: [CommonModule, RouterModule] // Importamos lo necesario para standalone
})
export class ContentTutorialComponent implements OnInit {
  //content: string = ''; // Aquí cargamos el contenido dinámico 
  content: SafeHtml = ''; // Usamos SafeHtml para prevenir problemas de estructura
  private routeSub!: Subscription; // Suscripción para escuchar cambios en los parámetros de la ruta

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  /*
  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta (para detectar cambios dinámicos)
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const pageId = params.get('id') || 'pages-introduccion'; // Obtener el parámetro dinámico

      // Ruta del archivo HTML externo basado en el ID
      const filePath = `/angular-tutorials/assets/content/${pageId}.html`;

      // Cargar el contenido dinámico del archivo HTML
      this.http.get(filePath, { responseType: 'text' }).subscribe(
        (data) => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(data); // Sanitizamos el contenido
          setTimeout(() => {
            this.generateTOC(); // Generar índice después de cargar el contenido
            initFlowbite(); // Inicializar Flowbite para los desplegables del sidenav
          }, 200); // Asegurar que todo esté cargado antes de inicializar
        },
        (error) => {
          this.content = '<p>Error al cargar el contenido.</p>'; // Manejar errores
        }
      );
    });
  }
  */

  ngOnInit(): void {
    // 1. Detectar redirecciones en GitHub Pages usando parámetros en la URL (?redirect=...)
    const urlParams = new URLSearchParams(window.location.search); // Obtener parámetros
    const redirectPath = urlParams.get('redirect'); // Leer el parámetro 'redirect'

    // 2. Suscribirse a los cambios dinámicos en los parámetros de la URL
    this.routeSub = this.route.paramMap.subscribe((params) => {
      let pageId: string;

      if (redirectPath) {
        // Si hay redirección desde GitHub Pages
        const segments = redirectPath.split('/');
        pageId = segments[segments.length - 1] || 'pages-introduccion'; // Última parte de la ruta
      } else {
        // Si no hay redirección, usa el parámetro dinámico de Angular
        pageId = params.get('id') || 'pages-introduccion';
      }

      console.log('Cargando página:', pageId); // DEBUG para confirmar la página cargada

      // 3. Construir la ruta para cargar el archivo HTML
      const filePath = `${window.location.origin}/angular-tutorials/assets/content/${pageId}.html`;

      // 4. Cargar el contenido HTML dinámico
      this.http.get(filePath, { responseType: 'text' }).subscribe(
        (data) => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(data); // Sanitiza el contenido
          setTimeout(() => {
            this.generateTOC(); // Generar el índice dinámico
            initFlowbite(); // Reinicializar Flowbite
          }, 200);
        },
        (error) => {
          console.error('Error al cargar contenido:', error); // DEBUG
          this.content = '<p>Error al cargar el contenido.</p>'; // Manejar errores
        }
      );
    });
  }
    ngAfterViewInit(): void {
      // Intenta generar el índice nuevamente después de que Angular actualice la vista
      setTimeout(() => {
        this.generateTOC(); // Generar índice
        initFlowbite(); // Inicializar Flowbite después de cargar contenido dinámico
      }, 200);
    }

  ngOnDestroy(): void {
    // Limpiar la suscripción para evitar fugas de memoria
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

    generateTOC(): void {
      const tocList = document.getElementById('toc-list');
      if (!tocList) return;

      // Limpiar el contenido previo del índice
      tocList.innerHTML = '';

      // Seleccionar el article y buscar encabezados H2 y H3
      const article = document.querySelector('article');
      const headers = article?.querySelectorAll('h2, h3');

      if (!headers || headers.length === 0) {
        console.warn('No se encontraron encabezados para el índice.');
        return;
      }

      let currentH2List: HTMLUListElement | null = null;

      headers.forEach((header, index) => {
        // Asignar un ID si no existe
        if (!header.id) {
          header.id = `section-${index}`;
        }

        // Crear el enlace
        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent || '';
        link.className = "block py-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500";

         // Añadir evento para manejar el scroll interno manualmente
          link.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar que recargue la página o cambie la URL
            const target = document.getElementById(header.id); // Buscar el elemento destino
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Hacer scroll suave
            }
          });
        
        
        const listItem = document.createElement('li');

        if (header.tagName === 'H2') {
          // Añadir el H2 como nivel principal
          listItem.appendChild(link);
          tocList.appendChild(listItem);

          // Crear una sublista para los H3
          currentH2List = document.createElement('ul');
          currentH2List.className = "pl-4 border-l-2 border-blue-500 space-y-1";
          listItem.appendChild(currentH2List);
        } else if (header.tagName === 'H3' && currentH2List) {
          // Añadir el H3 dentro del H2 correspondiente
          const subItem = document.createElement('li');
          subItem.appendChild(link);
          currentH2List.appendChild(subItem);
        }
      });
      
    }
}