import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-corosel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './owl-corosel.component.html',
  styleUrl: './owl-corosel.component.scss'
})
export class OwlCoroselComponent {
  @Input() bgColor: string = 'bg-one';
  
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
      logo: 'assets/images/logo/p_logo_68.png',
      icon: 'assets/images/icon/icon_04.2.svg',
      quote: 'I think if you do something and it turns <span style="color: #FD05F3;">out pretty good</span>, then you should go to do something',
      author: 'Rashed kabir',
      role: 'Lead Designer, Monday',
      rating: [1, 2, 3, 4, 5]
    },
    {
      logo: 'assets/images/logo/p_logo_67.png',
      icon: 'assets/images/icon/icon_04.2.svg',
      quote: 'The <span style="color: #5AD95F;">best SaaS company</span> without doubt. Something recommended to express your achievement!',
      author: 'Jon Cooper',
      role: 'Art Director, Slack',
      rating: [1, 2, 3, 4, 5]
    },
    {
      logo: 'assets/images/logo/p_logo_68.png',
      icon: 'assets/images/icon/icon_04.2.svg',
      quote: 'The <span style="color: #5AD95F;">best SaaS company</span> without doubt. Something recommended to express your achievement!',
      author: 'Jon Cooper',
      role: 'Art Director, Slack',
      rating: [1, 2, 3, 4, 5]
    }
  ];
}
