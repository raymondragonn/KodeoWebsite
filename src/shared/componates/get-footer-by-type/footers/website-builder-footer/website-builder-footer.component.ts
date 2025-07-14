import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';
import { SecFooterNavComponent } from '../../footer-columns/sec-footer-nav/sec-footer-nav.component';
import { ThreeFooterNavComponent } from '../../footer-columns/three-footer-nav/three-footer-nav.component';

@Component({
  selector: 'app-website-builder-footer',
  standalone: true,
  imports: [FirstFooterNavComponent,SecFooterNavComponent,ThreeFooterNavComponent],
  templateUrl: './website-builder-footer.component.html',
  styleUrl: './website-builder-footer.component.scss'
})
export class WebsiteBuilderFooterComponent {
  date = Date.now();
  year!: number;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
