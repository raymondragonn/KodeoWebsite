import { Component } from '@angular/core';
import { SecFooterNavComponent } from '../../footer-columns/sec-footer-nav/sec-footer-nav.component';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';

@Component({
  selector: 'app-mobile-landing-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent],
  templateUrl: './mobile-app-landing-footer.component.html',
  styleUrl: './mobile-app-landing-footer.component.scss'
})
export class MobileAppLandingFooterComponent {
  date = Date.now();
  year!: number;

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }
}
