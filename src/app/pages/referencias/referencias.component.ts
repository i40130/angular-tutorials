
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
    { title: 'Angular Official Docs', url: 'https://angular.io/docs' },
    { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
    { title: 'RxJS Documentation', url: 'https://rxjs.dev/guide/overview' }
  ];
}
