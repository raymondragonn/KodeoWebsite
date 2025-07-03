import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetFooterByTypeComponent } from '../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { GetHeaderByTypeComponent } from '../../shared/componates/get-header-by-type/get-header-by-type.component';
import { LayoutType } from '../../shared/types/layout-type';
import { BackToTopComponent } from '../../shared/componates/back-to-top/back-to-top.component';

@Component({
  selector: 'app-index-1',
  standalone: true,
  imports: [RouterModule,CommonModule,GetFooterByTypeComponent,GetHeaderByTypeComponent ],
  templateUrl: './index-1.component.html',
  styleUrl: './index-1.component.scss',
})
export class Index1Component {
  allLayout=LayoutType;
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showFooter = !this.router.url.includes('/404');
    });
  }
}
