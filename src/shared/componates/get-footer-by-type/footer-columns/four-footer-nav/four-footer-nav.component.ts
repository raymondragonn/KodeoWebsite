import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IAdditionalRow } from '../../footer-type';

@Component({
  selector: 'app-four-footer-nav',
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
export class FourFooterNavComponent {
  @Input() additionalRow: IAdditionalRow[] = []

  defaultLinks: IAdditionalRow[] = [
    { label: 'Help Docs', url: '/faq-v1' },
    { label: 'Chat', url: '/ai-writer/faq-v2' },
    { label: 'Developer', url: '/faq-v1' },
  ]

  ngOnInit() {
    if (this.additionalRow.length) {
      this.defaultLinks = [...this.defaultLinks, ...this.additionalRow];
    }
  }
}
