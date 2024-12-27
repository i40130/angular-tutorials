
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-tutorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-tutorial.component.html',
  styleUrls: ['./content-tutorial.component.css']
})
export class ContentTutorialComponent {
  tutorials = [
    {
      title: 'Introducción a Angular 17',
      content: 'Aprende los fundamentos de Angular 17 y sus nuevas características.',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
    },
    {
      title: 'Control Flow',
      content: 'Descubre cómo utilizar las nuevas estructuras de control en Angular.',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
    }
  ];
}
