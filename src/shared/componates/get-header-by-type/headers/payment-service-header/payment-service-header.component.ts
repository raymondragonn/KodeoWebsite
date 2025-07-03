import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { CommonModule } from '@angular/common';
import { LOGINLINK } from '../../../../core';

@Component({
  selector: 'app-payment-service-header',
  standalone: true,
  imports: [NavItemsComponent,CommonModule],
  templateUrl: './payment-service-header.component.html',
  styleUrl: './payment-service-header.component.scss'
})
export class PaymentServiceHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Let’s Started', link: LOGINLINK, class: 'btn-one w-100' },
  ];
}
