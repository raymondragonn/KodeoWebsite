import { Component } from '@angular/core';
import { FirstFooterNavComponent } from "../../footer-columns/first-footer-nav/first-footer-nav.component";
import { SecFooterNavComponent } from "../../footer-columns/sec-footer-nav/sec-footer-nav.component";
import { ThreeFooterNavComponent } from "../../footer-columns/three-footer-nav/three-footer-nav.component";

@Component({
  selector: 'app-cyber-security-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent, ThreeFooterNavComponent],
  templateUrl: './cyber-security-footer.component.html',
  styleUrl: './cyber-security-footer.component.scss'
})
export class CyberSecurityFooterComponent {
  date = Date.now();
  year!: number;

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }
}
