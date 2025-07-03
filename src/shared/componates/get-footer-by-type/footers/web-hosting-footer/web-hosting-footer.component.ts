import { Component } from '@angular/core';
import { SecFooterNavComponent } from '../../footer-columns/sec-footer-nav/sec-footer-nav.component';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';
import { ThreeFooterNavComponent } from "../../footer-columns/three-footer-nav/three-footer-nav.component";
import { FourFooterNavComponent } from "../../footer-columns/four-footer-nav/four-footer-nav.component";

@Component({
  selector: 'app-web-hosting-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent, ThreeFooterNavComponent, FourFooterNavComponent],
  templateUrl: './web-hosting-footer.component.html',
  styleUrl: './web-hosting-footer.component.scss'
})
export class WebHostingFooterComponent {
  date = Date.now();
  year!: number;

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }
}
