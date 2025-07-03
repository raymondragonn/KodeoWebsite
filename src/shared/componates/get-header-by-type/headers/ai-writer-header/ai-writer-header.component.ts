import { Component } from '@angular/core';
import { NavItemsComponent } from '../../nav-items/nav-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-writer-header',
  standalone: true,
  imports: [NavItemsComponent, CommonModule],
  templateUrl: './ai-writer-header.component.html',
  styleUrl: './ai-writer-header.component.scss'
})
export class AiWriterHeaderComponent {
  isSideNavOpen = false;

  items = [
    { label: 'Free Trials', link: '/web-hosting/pricing-v1', class: 'btn-three w-100' },
    { label: 'Call +757 699 - 4478', link: '', class: 'm0 fs-20 font-manrope text-center fw-500 ps-5' },
  ];
}
