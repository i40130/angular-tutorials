
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [
    {
      question: '¿Qué es Angular?',
      answer: 'Angular es un framework de desarrollo web desarrollado por Google para crear aplicaciones web dinámicas y de una sola página.'
    },
    {
      question: '¿Por qué usar Angular?',
      answer: 'Angular ofrece una estructura robusta, tipado fuerte con TypeScript, y un ecosistema completo para desarrollo web profesional.'
    }
  ];
}
