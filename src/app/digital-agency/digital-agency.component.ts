import { Component } from '@angular/core';
import { GetHeaderByTypeComponent } from "../../shared/componates/get-header-by-type/get-header-by-type.component";
import { GetFooterByTypeComponent } from "../../shared/componates/get-footer-by-type/get-footer-by-type.component";
import { RouterModule } from '@angular/router';
import { LayoutType } from '../../shared/types/layout-type';

@Component({
  selector: 'app-digital-agency',
  standalone: true,
  imports: [GetHeaderByTypeComponent, GetFooterByTypeComponent, RouterModule],
  templateUrl: './digital-agency.component.html',
  styleUrl: './digital-agency.component.scss'
})
export class DigitalAgencyComponent {
  allLayout = LayoutType;
}
