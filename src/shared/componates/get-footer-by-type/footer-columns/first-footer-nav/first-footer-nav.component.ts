import { Component, Input } from '@angular/core';
import { IAdditionalRow } from '../../footer-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-footer-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="footer-nav-link style-none">
      <li *ngFor="let link of defaultLinks">
        <a [href]="link.url">{{ link.label }}</a>
      </li>
    </ul>
  `,
  styles: ``
})
export class FirstFooterNavComponent {
  @Input() additionalRow: IAdditionalRow[] = []

  defaultLinks: IAdditionalRow[] = [
    { label: 'About', url: '/about-us-v1' },
    { label: 'Work Gallery', url: '/ai-writer/project-v2' },
    { label: 'Pricing', url: '/project-management/pricing-v2' },
    { label: 'Blog', url: '/digital-agency/blog-v3' },
    { label: 'Contact', url: '/ai-writer/contact-v2' }
  ]

  ngOnInit() {
    if (this.additionalRow.length) {
      this.defaultLinks = [...this.defaultLinks, ...this.additionalRow];
    }
  }
}
