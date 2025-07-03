import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';

@Component({
  selector: 'app-website-builder-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule],
  templateUrl: './website-builder-header.component.html',
  styleUrl: './website-builder-header.component.scss'
})
export class WebsiteBuilderHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Let’s Started', link: '/contact-v1', class: 'btn-seven w-100' },
  ];
}
