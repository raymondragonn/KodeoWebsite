import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAdditionalRow } from '../../footer-type';

@Component({
  selector: 'app-three-footer-nav',
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
export class ThreeFooterNavComponent {
  @Input() additionalRow: IAdditionalRow[] = []

  defaultLinks: IAdditionalRow[] = [
    { label: 'Portfolio', url: '/ai-writer/project-v2' },
    { label: 'Cookies Policy', url: '/faq-v1' },
    { label: 'Reports', url: '/ai-writer/blog-v2' },
    { label: 'Team', url: '/team-v1' },
    { label: 'Article', url: 'digital-agency/blog-v3' }
  ]

  ngOnInit() {
    if (this.additionalRow.length) {
      this.defaultLinks = [...this.defaultLinks, ...this.additionalRow];
    }
  }
}
