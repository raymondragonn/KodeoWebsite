import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-block-feature-web-builder',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './block-feature-web-builder.component.html',
  styleUrl: './block-feature-web-builder.component.scss'
})
export class BlockFeatureWebBuilderComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 3 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
  customOptionsOne: OwlOptions = {
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 4 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
