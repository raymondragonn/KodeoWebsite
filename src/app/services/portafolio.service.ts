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
  imageDetail1: string;
  imageDetail2: string;
  imageDetail3: string;
  imageDetail4: string;
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
      imageDetail1: 'assets/images/media/img_70.jpg',
      imageDetail2: 'assets/images/media/img_71.jpg',
      imageDetail3: 'assets/images/media/img_72.jpg',
      imageDetail4: 'assets/images/media/img_73.jpg',
      bgColor: '#FFFFFF'
    },

    {
      id: 2,
      num: '02.',
      title: 'Aplicación web para InCup',
      description: 'Desarrolle una landing page donde la empresa podia dar a conocer su marca y sus productos.',
      descriptionAmplia: 'Desarrolle una landing page donde la empresa podia dar a conocer su marca y sus productos. Ademas de un administrador donde pueden dar de alta y baja sus productos.',
      fecha: '23 Abril 2024',
      cliente: 'InCup',
      categoria: 'Web',
      challenge:  'El desafio fue crear una plataforma intuitiva y atractiva que reflejara la esencia de la marca Aixa',
      sitio: 'https://incup.com.mx/',
      link: '/digital-agency/project-details/2',
      tags: ['Invantario', 'Web', 'BRANDING'],
      imageUrl: 'assets/images/media/img_17.png',
      imageDetail1: 'assets/images/media/img_70.1.jpg',
      imageDetail2: 'assets/images/media/img_71.1.jpg',
      imageDetail3: 'assets/images/media/img_72.1.jpg',
      imageDetail4: 'assets/images/media/img_73.1.jpg',
      bgColor: '#FFFFFF'
    },
    {
      id: 3,
      num: '03.',
      title: 'Aplicación web para Banorte',
      description: 'Desarrolle una landing page donde la empresa podia dar a conocer su marca y sus productos.',
      descriptionAmplia: 'Desarrolle una landing page donde la empresa podia dar a conocer su marca y sus productos. Ademas de un administrador donde pueden dar de alta y baja sus productos.',
      fecha: '23 Abril 2024',
      cliente: 'Banorte',
      categoria: 'Web',
      challenge:  'El desafio fue crear una plataforma intuitiva y atractiva que reflejara la esencia de la marca Aixa',
      sitio: 'https://proyecto-hackthon-mty-zwd8.vercel.app/',
      link: '/digital-agency/project-details/3',
      tags: ['Banco', 'IA', 'WEB'],
      imageUrl: 'assets/images/media/img_cel.png',
      imageDetail1: 'assets/images/media/img_70.2.jpg',
      imageDetail2: 'assets/images/media/img_71.2.jpg',
      imageDetail3: 'assets/images/media/img_72.2.jpg',
      imageDetail4: 'assets/images/media/img_73.2.jpg',
      bgColor: '#FFFFFF'
    },
    {
      id: 4,
      num: '04.',
      title: 'Aplicación de cursos en Linea',
      description: 'Desarrollo de la intefaz de usuario para la toma y venta de los cursos en linea.',
      descriptionAmplia: 'Desarrolle la intefaz de usuario para la toma y venta de los cursos en linea. Además del desarrollo de la parte del administrador, en la que se generan cursos con ayuda de la IA',
      fecha: '23 Abril 2024',
      cliente: 'Learnify',
      categoria: 'Web',
      challenge:  'El desafio fue crear una plataforma intuitiva y atractiva que reflejara la esencia de la marca Aixa',
      sitio: 'https://www.learnify.com.mx/home',
      link: '/digital-agency/project-details/4',
      tags: ['Vimeo', 'IA', 'WEB'],
      imageUrl: 'assets/images/media/img_learn.png',
      imageDetail1: 'assets/images/media/img_70Learning.jpg',
      imageDetail2: 'assets/images/media/img_71Learning.jpg',
      imageDetail3: 'assets/images/media/img_72Learn.jpg',
      imageDetail4: 'assets/images/media/img_73Learn.jpg',
      bgColor: '#FFFFFF'
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
