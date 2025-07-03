import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetHeaderByTypeComponent } from '../../shared/componates/get-header-by-type/get-header-by-type.component';
import { GetFooterByTypeComponent } from '../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { LayoutType } from '../../shared/types/layout-type';

@Component({
  selector: 'app-kodeo-website',
  standalone: true,
  imports: [RouterModule,GetHeaderByTypeComponent,GetFooterByTypeComponent],
  templateUrl: './kodeo-website.component.html',
  styleUrl: './kodeo-website.component.scss'
})
export class KodeoWebsiteComponent {
  allLayout=LayoutType;
}
