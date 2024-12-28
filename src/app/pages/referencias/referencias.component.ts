
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent {
  referencias = [
    { title: 'Angular Official Docs', url: 'https://angular.io/docs', answer: 'La documentación oficial de Angular proporciona información completa sobre cómo comenzar, crear componentes, servicios, módulos y gestionar rutas. Es ideal para aprender las mejores prácticas y explorar características avanzadas como la inyección de dependencias y las directivas personalizadas.' 
      },
    { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', answer: 'El manual de TypeScript es una guía esencial para aprender este lenguaje de programación fuertemente tipado, que potencia Angular. Cubre conceptos clave como tipos, interfaces, clases y módulos, además de características avanzadas como genéricos y decoradores.' },
    { title: 'RxJS Documentation', url: 'https://rxjs.dev/guide/overview',answer: 'La documentación de RxJS ofrece recursos para dominar la programación reactiva, ampliamente utilizada en Angular. Explica conceptos como Observables, operadores y suscripciones, permitiendo gestionar flujos de datos asíncronos de manera eficiente y escalable.' }
  ];
}
 