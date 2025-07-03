import { Component } from '@angular/core';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { BlockFeatureOneComponent } from './block-feature-one/block-feature-one.component';
import { FaqSectionOneComponent } from './faq-section-one/faq-section-one.component';
import { FancyBannerComponent } from './fancy-banner/fancy-banner.component';
import { OwlCoroselComponent } from '../../../shared/componates/owl-corosel.component/owl-corosel.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [HeroBannerComponent,BlockFeatureOneComponent,FaqSectionOneComponent,FancyBannerComponent,CommonModule,CarouselModule ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 2 }
    },
    slideBy: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };

  feedbacks = [
    {
      logo: 'assets/images/logo/p_logo_07.png',
      icon: 'assets/images/icon/icon_04.svg',
      quote: 'I think if you do something and it turns <span style="color: #FD05F3;">out pretty good</span>, then you should go to do something',
      author: 'Rashed kabir',
      role: 'Lead Designer, Monday',
      rating: [1, 2, 3, 4, 5]
    },
    {
      logo: 'assets/images/logo/p_logo_08.png',
      icon: 'assets/images/icon/icon_04.svg',
      quote: 'The <span style="color: #5AD95F;">best SaaS company</span> without doubt. Something recommended to express your achievement!',
      author: 'Jon Cooper',
      role: 'Art Director, Slack',
      rating: [1, 2, 3, 4, 5]
    },
    {
      logo: 'assets/images/logo/p_logo_07.png',
      icon: 'assets/images/icon/icon_04.svg',
      quote: 'The <span style="color: #5AD95F;">best SaaS company</span> without doubt. Something recommended to express your achievement!',
      author: 'Jon Cooper',
      role: 'Art Director, Slack',
      rating: [1, 2, 3, 4, 5]
    }
  ];
}
