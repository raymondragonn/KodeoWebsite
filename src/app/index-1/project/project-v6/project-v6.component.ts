import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-project-v6',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './project-v6.component.html',
  styleUrl: './project-v6.component.scss'
})
export class ProjectV6Component {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: any;

  slides = [
    {
      img: 'assets/images/media/img_67.jpg',
      category: 'UI DESIGN',
      title: 'Website — Banner Exploration',
      link: '/digital-agency/project-details'
    },
    {
      img: 'assets/images/media/img_68.jpg',
      category: 'Mobile app',
      title: 'App — Finance & Banking',
      link: '/digital-agency/project-details'
    },
    {
      img: 'assets/images/media/img_69.jpg',
      category: 'Application',
      title: 'Kindergarten — Online school',
      link: '/digital-agency/project-details'
    },
    {
      img: 'assets/images/media/img_68.jpg',
      category: 'Mobile app',
      title: 'App — Finance & Banking',
      link: '/digital-agency/project-details'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 3 }
    },
    slideBy: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>']
  };

  goToNext() {
    // this.owlCarousel.to(this.newsId)
  }

  goToPre() {

  }
}
