import { Component, Input } from '@angular/core';
import { IAdditionalRow } from '../../footer-type';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { LOGINLINK } from '../../../../core';

@Component({
  selector: 'app-sec-footer-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <ul class="footer-nav-link style-none">
      <li *ngFor="let link of defaultLinks">
        <a [routerLink]="link.url">{{ link.label }}</a>
      </li>
    </ul>
  `,
  styles: ``
})
export class SecFooterNavComponent {
  @Input() additionalRow: IAdditionalRow[] = []

  defaultLinks: IAdditionalRow[] = [
    { label: 'Faq’s', url: '/faq-v1' },
    { label: 'Service', url: '/service-v1' },
    { label: 'Login', url: LOGINLINK },
  ]

  ngOnInit() {
    if (this.additionalRow.length) {
      this.defaultLinks = [...this.defaultLinks, ...this.additionalRow];
    }
  }
}
