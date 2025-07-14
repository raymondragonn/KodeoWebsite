import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-banner-kodeo-website',
  standalone: true,
  imports: [],
  templateUrl: './quote-banner-kodeo-website.component.html',
  styleUrl: './quote-banner-kodeo-website.component.scss'
})
export class QuoteBannerKodeoWebsiteComponent {
  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
