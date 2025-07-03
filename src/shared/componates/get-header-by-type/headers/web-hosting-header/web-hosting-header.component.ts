import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { REGISTERLINK } from '../../../../core';

@Component({
  selector: 'app-web-hosting-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule],
  templateUrl: './web-hosting-header.component.html',
  styleUrl: './web-hosting-header.component.scss'
})
export class WebHostingHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Register', link: REGISTERLINK, class: 'btn-eighteen w-100' },
  ];
}
