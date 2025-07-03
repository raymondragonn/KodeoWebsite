import { Component } from '@angular/core';
import { HeroBannerWebBuilderComponent } from './sections/hero-banner-web-builder/hero-banner-web-builder.component';
import { BlockFeatureWebBuilderComponent } from './sections/block-feature-web-builder/block-feature-web-builder.component';
import { FeedbackWebBuilderComponent } from './sections/feedback-web-builder/feedback-web-builder.component';
import { PricingWebBuilderComponent } from './sections/pricing-web-builder/pricing-web-builder.component';
import { FancyBannerWebBuilderComponent } from './sections/fancy-banner-web-builder/fancy-banner-web-builder.component';

@Component({
  selector: 'app-default-website-builder',
  standalone: true,
  imports: [HeroBannerWebBuilderComponent,BlockFeatureWebBuilderComponent,FeedbackWebBuilderComponent,PricingWebBuilderComponent,FancyBannerWebBuilderComponent],
  templateUrl: './default-website-builder.component.html',
  styleUrl: './default-website-builder.component.scss'
})
export class DefaultWebsiteBuilderComponent {

}
