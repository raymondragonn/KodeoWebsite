import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ourservices-banner-kodeo-website',
  standalone: true,
  imports: [CarouselModule,CommonModule,CountUpModule],
  templateUrl: './ourservices-banner-kodeo-website.component.html',
  styleUrl: './ourservices-banner-kodeo-website.component.scss'
})
export class OurservicesBannerKodeoWebsiteComponent {
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
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  
  customOptionsThree: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 1,
  };

  customOptionsOne: OwlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 6,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
}
