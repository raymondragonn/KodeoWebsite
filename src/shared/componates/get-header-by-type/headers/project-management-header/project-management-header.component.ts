import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-management-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule,NgbDropdownModule],
  templateUrl: './project-management-header.component.html',
  styleUrl: './project-management-header.component.scss'
})
export class ProjectManagementHeaderComponent {
  isSideNavOpen = false;
}
