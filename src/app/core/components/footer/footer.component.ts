
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  email: string = ''; // Para guardar el email introducido
  showSuccessMessage: boolean = false; // Controla la visibilidad del mensaje

  constructor() {}

  onSubmit() {
    // Simulamos el envío del formulario
    console.log('Correo enviado:', this.email);

    // Mostramos el mensaje
    this.showSuccessMessage = true;

    // Ocultamos el mensaje después de 3 segundos
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);

    // Reseteamos el formulario
    this.email = '';
  }
}
