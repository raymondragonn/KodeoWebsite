import { Component } from '@angular/core';
import { HeroBannerKodeoWebsiteComponent } from './sections/hero-banner-kodeo-website/hero-banner-kodeo-website.component';
import { OurservicesBannerKodeoWebsiteComponent } from './sections/ourservices-banner-kodeo-website/ourservices-banner-kodeo-website.component';
import { IntegrationBannerKodeoWebsiteComponent } from './sections/integration-banner-kodeo-website/integration-banner-kodeo-website.component';
import { LatestworkBannerKodeoWebsiteComponent } from './sections/latestwork-banner-kodeo-website/latestwork-banner-kodeo-website.component';
import { FaqBannerKodeoWebsiteComponent } from './sections/faq-banner-kodeo-website/faq-banner-kodeo-website.component';
import { TestimonialsBannerKodeoWebsiteComponent } from './sections/testimonials-banner-kodeo-website/testimonials-banner-kodeo-website.component';
import { ContactusBannerKodeoWebsiteComponent } from './sections/contactus-banner-kodeo-website/contactus-banner-kodeo-website.component';
import { QuoteBannerKodeoWebsiteComponent } from './sections/quote-banner-kodeo-website/quote-banner-kodeo-website.component';
import { ProcesoBannerKodeoWebsiteComponent } from './sections/proceso-banner-kodeo-website/proceso-banner-kodeo-website.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [HeroBannerKodeoWebsiteComponent,OurservicesBannerKodeoWebsiteComponent,IntegrationBannerKodeoWebsiteComponent,LatestworkBannerKodeoWebsiteComponent,FaqBannerKodeoWebsiteComponent,TestimonialsBannerKodeoWebsiteComponent,ContactusBannerKodeoWebsiteComponent,QuoteBannerKodeoWebsiteComponent,ProcesoBannerKodeoWebsiteComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
