import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem, MenuType } from './menu';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LOGINLINK, REGISTERLINK } from '../../../core';
import { MENUITEMS } from './menu-data';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterModule],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {
  @Input() extraDetails: { label: string; link: string; class?: string; isText?: boolean; img?: string }[] = [];
  @Input() isSideNavOpen = false;

  menuType = MenuType;
  menu = MENUITEMS;

  ngOnInit() { }
}
