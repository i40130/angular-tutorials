
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  team = [
    {
      name: 'Neil Sims',
      position: 'Founder & CEO',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
    },
    {
      name: 'Bonnie Green',
      position: 'CTO',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'
    },
    {
      name: 'Michael Gough',
      position: 'Senior Developer',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
    }
  ];
}
