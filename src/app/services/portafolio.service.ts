import { Injectable } from '@angular/core';

export interface PortfolioItem {
  id: number;
  num: string;
  title: string;
  description: string;
  descriptionAmplia: string;
  fecha: string;
  cliente: string;
  categoria: string;
  challenge: string;
  sitio: string;
  link: string;
  tags: string[];
  imageUrl: string;
  bgColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class   PortafolioService {

  constructor() { }


  private portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      num: '01.',
      title: 'Aplicación web para cosmetología',
      description: 'Creamos una aplicación web donde el cliente podia dar a conocer su marca y los servicios que ofrece, ademas de poder contactarse a travez de mail o whatsapp.',
      descriptionAmplia: 'Creamos una aplicación web donde el cliente podia dar a conocer su marca y los servicios que ofrece, ademas de poder contactarse a travez de mail o whatsapp. Creación de Aplicación web para cosmetologíaCreamos una aplicación web donde el cliente podia dar a conocer su marca y los servicios que ofrece, ademas de poder contactarse a travez de mail o whatsappDesarrollamos un administrador para dar de alta, baja y crear nuevos servicios que ofrezca el cliente.',
      fecha: '23 Abril 2024',
      cliente: 'Aixa',
      categoria: 'Web',
      challenge:  'El desafio fue crear una plataforma intuitiva y atractiva que reflejara la esencia de la marca Aixa',
      sitio: 'https://aixaver.com/index-2',
      link: '/digital-agency/project-details/1',
      tags: ['Web', 'UI/UX', 'BRANDING'],
      imageUrl: 'assets/images/media/img_16.png',
      bgColor: '#FFFFFF'
    },

    {
      id: 2,
      num: '02.',
      title: 'E-commerce Website',
      description: 'Modern e-commerce solutions for growing businesses.',
      descriptionAmplia: 'Creamos una aplicación web donde el cliente podia dar a conocer su marca y los servicios que ofrece, ademas de poder contactarse a travez de mail o whatsapp. Creación de Aplicación web para cosmetologíaCreamos una aplicación web donde el cliente podia dar a conocer su marca y los servicios que ofrece, ademas de poder contactarse a travez de mail o whatsappDesarrollamos un administrador para dar de alta, baja y crear nuevos servicios que ofrezca el cliente.',
      fecha: '23 Abril 2024',
      cliente: 'Aixa',
      categoria: 'Web',
      challenge:  'El desafio fue crear una plataforma intuitiva y atractiva que reflejara la esencia de la marca Aixa',
      sitio: 'https://aixaver.com/index-2',
      link: '/digital-agency/project-details/2',
      tags: ['E-commerce', 'Web', 'BRANDING'],
      imageUrl: 'assets/images/media/img_17.png',
      bgColor: '#FFB347'
    }
    // ...más proyectos
  ];


  getAll(): PortfolioItem[] {
    return this.portfolioItems;
  }

  getById(id: number): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}
