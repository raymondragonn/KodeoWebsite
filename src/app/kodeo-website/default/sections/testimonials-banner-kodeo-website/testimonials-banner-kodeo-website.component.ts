import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialsService, Testimonial } from '../../../../services/testimonials.service';
enum Plans{
  Monthy,
  Yearly
}
@Component({
  selector: 'app-testimonials-banner-kodeo-website',
  standalone: true,
  imports: [CountUpModule,CarouselModule,NgbAccordionModule,CommonModule],
  templateUrl: './testimonials-banner-kodeo-website.component.html',
  styleUrl: './testimonials-banner-kodeo-website.component.scss',
  providers: [TestimonialsService]
})
export class TestimonialsBannerKodeoWebsiteComponent {
  plans=Plans
  selectedPlan = Plans.Monthy
  testimonials: Testimonial[] = [];
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    },
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit() {
    this.testimonials = this.testimonialsService.getAll();
  }
}
