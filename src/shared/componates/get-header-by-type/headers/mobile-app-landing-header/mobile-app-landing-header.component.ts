import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-landing-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule,NgbDropdownModule ],
  templateUrl: './mobile-app-landing-header.component.html',
  styleUrl: './mobile-app-landing-header.component.scss'
})
export class MobileAppLandingHeaderComponent {
  isSideNavOpen = false;

  items = [];
}
