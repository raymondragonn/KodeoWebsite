import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonials-banner-kodeo-website',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials-banner-kodeo-website.component.html',
  styleUrl: './testimonials-banner-kodeo-website.component.scss'
})
export class TestimonialsBannerKodeoWebsiteComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 6 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
