import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mobile-app-landing-default',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './mobile-app-landing-default.component.html',
  styleUrl: './mobile-app-landing-default.component.scss'
})
export class MobileAppLandingDefaultComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
