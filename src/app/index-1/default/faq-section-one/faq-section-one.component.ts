import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-section-one',
  standalone: true,
  imports: [NgbAccordionModule,RouterModule],
  templateUrl: './faq-section-one.component.html',
  styleUrl: './faq-section-one.component.scss'
})
export class FaqSectionOneComponent {

}
