import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing-v2',
  standalone: true,
  imports: [CommonModule,NgbAccordionModule],
  templateUrl: './pricing-v2.component.html',
  styleUrl: './pricing-v2.component.scss'
})
export class PricingV2Component {
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
