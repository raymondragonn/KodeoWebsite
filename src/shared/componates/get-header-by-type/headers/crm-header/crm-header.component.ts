import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { REGISTERLINK } from '../../../../core';

@Component({
  selector: 'app-crm-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule],
  templateUrl: './crm-header.component.html',
  styleUrl: './crm-header.component.scss'
})
export class CrmHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Try it Now', link: REGISTERLINK, class: 'btn-seven w-100' },
  ];
}
