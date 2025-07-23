import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgbAccordionModule,RouterModule,CountUpModule,NgbCarouselModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  constructor() {

  }
  carouselImages = [
    { src: 'assets/images/media/img_KodeoTeam.jpg', alt: 'Equipo Kodeo' },
    { src: 'assets/images/media/img_KodeoTeam2.jpg', alt: 'Otra imagen' },
    { src: 'assets/images/media/img_KodeoTeam3.jpg', alt: 'Otra imagen' }
  ];
}
