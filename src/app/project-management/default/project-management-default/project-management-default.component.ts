import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-management-default',
  standalone: true,
  imports: [NgbAccordionModule, CarouselModule,CommonModule],
  templateUrl: './project-management-default.component.html',
  styleUrl: './project-management-default.component.scss'
})
export class ProjectManagementDefaultComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 70,
    nav: false,
    dots: false,
    items: 4,
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

  customOptionsOne: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    items: 4,
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
  activeTab: string = 'monthly'; // Default active tab

  pricingPlans = {
    monthly: [
      {
        price: '$7',
        borderColor: '#20E8C4',
        planName: 'Personal',
        description: 'Available for single person',
        features: ['Web Design', 'Front-End Coding', 'Mobile App Development'],
        shape: 'assets/images/shape/shape_48.svg',
      },
      {
        price: '$49',
        borderColor: '#FFC736',
        planName: 'Team, Startup',
        description: 'Available team seat up to 10',
        features: [
          'Web Design',
          'Front-End Coding',
          'Mobile App Development',
          'Programming',
          'Ai Pilot',
        ],
        shape: 'assets/images/shape/shape_49.svg',
      },
      {
        price: '$99',
        borderColor: '#FF56BB',
        planName: 'Enterprise',
        description: 'Available team seat up to 10',
        features: [
          'Web Design',
          'Front-End Coding',
          'Mobile App Development',
          'Programming',
          'Ai Pilot',
          'Expert Support',
        ],
        shape: 'assets/images/shape/shape_50.svg',
      },
    ],
    yearly: [
      {
        price: '$107',
        borderColor: '#20E8C4',
        planName: 'Personal',
        description: 'Available for single person',
        features: ['Web Design', 'Front-End Coding', 'Mobile App Development'],
        shape: 'assets/images/shape/shape_48.svg',
      },
      {
        price: '$449',
        borderColor: '#FFC736',
        planName: 'Team, Startup',
        description: 'Available team seat up to 10',
        features: [
          'Web Design',
          'Front-End Coding',
          'Mobile App Development',
          'Programming',
          'Ai Pilot',
        ],
        shape: 'assets/images/shape/shape_49.svg',
      },
      {
        price: '$990',
        borderColor: '#FF56BB',
        planName: 'Enterprise',
        description: 'Available team seat up to 10',
        features: [
          'Web Design',
          'Front-End Coding',
          'Mobile App Development',
          'Programming',
          'Ai Pilot',
          'Expert Support',
        ],
        shape: 'assets/images/shape/shape_50.svg',
      },
    ],
  };

  changeTab(tab: string): void {
    this.activeTab = tab;
  }
}
