import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetHeaderByTypeComponent } from '../../shared/componates/get-header-by-type/get-header-by-type.component';
import { GetFooterByTypeComponent } from '../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { LayoutType } from '../../shared/types/layout-type';

@Component({
  selector: 'app-website-builder',
  standalone: true,
  imports: [RouterModule,GetHeaderByTypeComponent,GetFooterByTypeComponent],
  templateUrl: './website-builder.component.html',
  styleUrl: './website-builder.component.scss'
})
export class WebsiteBuilderComponent {
  allLayout=LayoutType;

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
