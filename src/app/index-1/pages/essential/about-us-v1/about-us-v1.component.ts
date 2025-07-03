import { Component } from '@angular/core';
import { FancyBannerComponent } from '../../../default/fancy-banner/fancy-banner.component';
import { CountUpModule } from 'ngx-countup';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlCoroselComponent } from '../../../../../shared/componates/owl-corosel.component/owl-corosel.component';

@Component({
  selector: 'app-about-us-v1',
  standalone: true,
  imports: [FancyBannerComponent,CountUpModule,NgbAccordionModule,OwlCoroselComponent],
  templateUrl: './about-us-v1.component.html',
  styleUrl: './about-us-v1.component.scss'
})
export class AboutUsV1Component {

}
