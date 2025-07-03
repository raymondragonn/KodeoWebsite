import { Component } from '@angular/core';
import { SecFooterNavComponent } from '../../footer-columns/sec-footer-nav/sec-footer-nav.component';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';

@Component({
  selector: 'app-digital-agency-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent],
  templateUrl: './digital-agency-footer.component.html',
  styleUrl: './digital-agency-footer.component.scss'
})
export class DigitalAgencyFooterComponent {
  date = Date.now();
  year!: number;

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }
}
