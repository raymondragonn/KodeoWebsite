import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cyber-security-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule,NgbDropdownModule],
  templateUrl: './cyber-security-header.component.html',
  styleUrl: './cyber-security-header.component.scss'
})
export class CyberSecurityHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'My Account', link: 'javascript:void(0)', class: 'login-btn-one fw-500 d-flex justify-content-center align-items-center tran3s',img:'assets/images/icon/icon_18.svg'},
    { label: 'Call  +757 699-4478', link: 'javascript:void(0)', class: 'text-white ms-4rem' },
  ];
}
