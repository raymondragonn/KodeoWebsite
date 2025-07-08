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
      logo: 'assets/images/logo/p_logo_65.png',
      quote: 'Best decision ever, smooth hosting experience!',
      name: 'Hasan Abdul',
      role: 'Engineer',
      icon: 'assets/images/icon/icon_56.svg'
    },
    {
      logo: 'assets/images/logo/p_logo_66.png',
      quote: 'Best decision ever, smooth hosting experience!',
      name: 'Rashed Ka',
      role: 'Engineer',
      icon: 'assets/images/icon/icon_56.svg'
    },
  ];

  getAll(): Testimonial[] {
    return this.testimonials;
  }
} 