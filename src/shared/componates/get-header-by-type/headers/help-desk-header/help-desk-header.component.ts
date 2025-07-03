import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { REGISTERLINK } from '../../../../core';

@Component({
  selector: 'app-help-desk-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule],
  templateUrl: './help-desk-header.component.html',
  styleUrl: './help-desk-header.component.scss'
})
export class HelpDeskHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Sign Up', link: REGISTERLINK, class: 'btn-one tran3s w-100' },
  ];
}
