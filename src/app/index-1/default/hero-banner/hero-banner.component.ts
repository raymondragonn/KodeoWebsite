import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  logos = [
    'assets/images/logo/p_logo_01.png',
    'assets/images/logo/p_logo_02.png',
    'assets/images/logo/p_logo_03.png',
    'assets/images/logo/p_logo_04.png',
    'assets/images/logo/p_logo_05.png',
    'assets/images/logo/p_logo_06.png',
    'assets/images/logo/p_logo_04.png',
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
}
