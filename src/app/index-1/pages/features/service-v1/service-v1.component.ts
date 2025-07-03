import { Component } from '@angular/core';
import { FancyBannerComponent } from '../../../default/fancy-banner/fancy-banner.component';
import { OwlCoroselComponent } from '../../../../../shared/componates/owl-corosel.component/owl-corosel.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-service-v1',
  standalone: true,
  imports: [FancyBannerComponent,OwlCoroselComponent,NgbAccordionModule,CountUpModule],
  templateUrl: './service-v1.component.html',
  styleUrl: './service-v1.component.scss'
})
export class ServiceV1Component {

}
