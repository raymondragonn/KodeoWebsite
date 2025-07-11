import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortafolioService, PortfolioItem } from '../../../../services/portafolio.service';

@Component({
  selector: 'app-latestwork-banner-kodeo-website',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './latestwork-banner-kodeo-website.component.html',
  styleUrl: './latestwork-banner-kodeo-website.component.scss'
})


export class LatestworkBannerKodeoWebsiteComponent {
  portfolioItems: PortfolioItem[] = [];
  textoSeleccionado: string = ''; // Almacena el paso seleccionado
  constructor(private portfolioService: PortafolioService) {
    

  }

  

  ngOnInit() {
    this.portfolioItems = this.portfolioService.getAll();
  }

  mostrarTexto(paso: string): void {
    // Si el paso seleccionado ya está visible, lo ocultamos, sino lo mostramos
    if (this.textoSeleccionado === paso) {
      this.textoSeleccionado = ''; // Ocultar el texto si se hace clic en el mismo paso
    } else {
      this.textoSeleccionado = paso; // Mostrar el texto del paso seleccionado
    }
  }
  
  


}
