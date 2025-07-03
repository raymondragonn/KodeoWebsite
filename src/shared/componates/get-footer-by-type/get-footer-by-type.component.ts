import { Component, Input } from '@angular/core';
import { PaymentServiceFooterComponent } from './footers/payment-service-footer/payment-service-footer.component';
import { CommonModule } from '@angular/common';
import { AiWriterFooterComponent } from './footers/ai-writer-footer/ai-writer-footer.component';
import { WebsiteBuilderFooterComponent } from './footers/website-builder-footer/website-builder-footer.component';
import { CrmFooterComponent } from './footers/crm-footer/crm-footer.component';
import { ProjectManagementFooterComponent } from './footers/project-management-footer/project-management-footer.component';
import { MobileAppLandingFooterComponent } from './footers/mobile-app-landing-footer/mobile-app-landing-footer.component';
import { DigitalAgencyFooterComponent } from './footers/digital-agency-footer/digital-agency-footer.component';
import { HelpDeskFooterComponent } from './footers/help-desk-footer/help-desk-footer.component';
import { WebHostingFooterComponent } from './footers/web-hosting-footer/web-hosting-footer.component';
import { CyberSecurityFooterComponent } from './footers/cyber-security-footer/cyber-security-footer.component';
import { LayoutType } from '../../types/layout-type';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-get-footer-by-type',
  standalone: true,
  imports: [PaymentServiceFooterComponent,AiWriterFooterComponent,WebsiteBuilderFooterComponent,CrmFooterComponent,ProjectManagementFooterComponent,MobileAppLandingFooterComponent,DigitalAgencyFooterComponent,HelpDeskFooterComponent,WebHostingFooterComponent,CyberSecurityFooterComponent,CommonModule,BackToTopComponent],
  templateUrl: './get-footer-by-type.component.html',
  styleUrl: './get-footer-by-type.component.scss'
})
export class GetFooterByTypeComponent {
  allFooterType = LayoutType
  @Input() footerType!: LayoutType;


  
}
