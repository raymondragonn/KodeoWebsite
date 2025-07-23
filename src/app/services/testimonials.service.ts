import { Injectable } from '@angular/core';

export interface Testimonial {
  logo: string;
  quote: string;
  name: string;
  role: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [
    {
      logo: 'assets/images/assets/incup.svg',
      quote: 'Estoy muy satisfecho con el trabajo. Mi marca tiene presencia en internet y puedo mostrar mis productos de manera sencilla y profesional. El equipo fue accesible y atendió nuestras preguntas y cambios sin inconvenientes. Recomiendo sus servicios y volvería a contratarlos.',
      name: 'Axel Heriberto Ortega Silva',
      role: 'Director General',
      icon: 'assets/images/icon/icon_56.svg'
    },
    {
      logo: 'assets/images/assets/aixa.svg',
      quote: 'Recibí un excelente servicio. Atendieron todas mis peticiones y me ayudaron a desarrollar una página web visualmente atractiva y completamente funcional.',
      name: 'Yessica Barradas',
      role: 'Cosmetóloga',
      icon: 'assets/images/icon/icon_56.svg'
    },
    {
      logo: 'assets/images/assets/learnify.svg',
      quote: 'La plataforma de cursos en línea cumple con los requerimientos iniciales mencionados. Estoy satisfecho con el trabajo realizado, la plataforma funciona sin problemas.',
      name: 'Luis Wong',
      role: 'Emprendedor',
      icon: 'assets/images/icon/icon_56.svg'
    },
  ];

  getAll(): Testimonial[] {
    return this.testimonials;
  }
} 