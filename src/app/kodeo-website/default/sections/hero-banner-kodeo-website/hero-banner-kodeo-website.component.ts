import { Component } from '@angular/core';
import { ScrollServiceService } from '../../../../services/scroll-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner-kodeo-website',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner-kodeo-website.component.html',
  styleUrl: './hero-banner-kodeo-website.component.scss'
})
export class HeroBannerKodeoWebsiteComponent {
  
  constructor(private scrollService: ScrollServiceService, private router: Router ){}

  onBuildNowClick(text: string) {
    this.scrollService.scrollToElement('contactSection');
    this.scrollService.fillContactForm(text);
  }  

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
