import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-banner-kodeo-website',
  standalone: true,
  imports: [NgbAccordionModule,RouterModule],
  templateUrl: './faq-banner-kodeo-website.component.html',
  styleUrl: './faq-banner-kodeo-website.component.scss'
})
export class FaqBannerKodeoWebsiteComponent {

}
