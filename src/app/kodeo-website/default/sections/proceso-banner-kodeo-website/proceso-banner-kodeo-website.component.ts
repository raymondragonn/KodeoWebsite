import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proceso-banner-kodeo-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proceso-banner-kodeo-website.component.html',
  styleUrl: './proceso-banner-kodeo-website.component.scss'
})
export class ProcesoBannerKodeoWebsiteComponent {
  fasesVisibles: { [key: string]: boolean } = {
    discovery: false,
    exploration: false,
    execution: false,
    implementacion: false
  };

  mostrarTexto(tipo: string) {
    // Cambiar el estado de la fase específica
    this.fasesVisibles[tipo] = !this.fasesVisibles[tipo];
  }
} 