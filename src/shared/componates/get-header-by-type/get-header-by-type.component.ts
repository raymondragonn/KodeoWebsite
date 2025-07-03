import { Component, Input } from '@angular/core';
import { LayoutType } from '../../types/layout-type';
import { CommonModule } from '@angular/common';
import { PaymentServiceHeaderComponent } from './headers/payment-service-header/payment-service-header.component';
import { AiWriterHeaderComponent } from './headers/ai-writer-header/ai-writer-header.component';
import { WebsiteBuilderHeaderComponent } from './headers/website-builder-header/website-builder-header.component';
import { CrmFooterComponent } from '../get-footer-by-type/footers/crm-footer/crm-footer.component';
import { CrmHeaderComponent } from './headers/crm-header/crm-header.component';
import { ProjectManagementHeaderComponent } from './headers/project-management-header/project-management-header.component';
import { MobileAppLandingHeaderComponent } from './headers/mobile-app-landing-header/mobile-app-landing-header.component';
import { DigitalAgencyHeaderComponent } from './headers/digital-agency-header/digital-agency-header.component';
import { HelpDeskHeaderComponent } from './headers/help-desk-header/help-desk-header.component';
import { CyberSecurityHeaderComponent } from './headers/cyber-security-header/cyber-security-header.component';
import { WebHostingHeaderComponent } from "./headers/web-hosting-header/web-hosting-header.component";
import { PikuLoaderComponent } from "../piku-loader/piku-loader.component";

@Component({
  selector: 'app-get-header-by-type',
  standalone: true,
  imports: [CommonModule, PaymentServiceHeaderComponent, AiWriterHeaderComponent, WebsiteBuilderHeaderComponent, CrmHeaderComponent, ProjectManagementHeaderComponent, MobileAppLandingHeaderComponent, DigitalAgencyHeaderComponent, HelpDeskHeaderComponent, WebsiteBuilderHeaderComponent, CyberSecurityHeaderComponent, WebHostingHeaderComponent, PikuLoaderComponent],
  templateUrl: './get-header-by-type.component.html',
  styleUrl: './get-header-by-type.component.scss'
})
export class GetHeaderByTypeComponent {
  allHeaderType = LayoutType
  @Input() headerType!: LayoutType;

  loader = false;

  ngOnInit(){
    this.loader=true;
    setTimeout(() => {
      this.loader=false;
    }, 2000);
  }
  
  windowScroll() {
    const elementBackToTop =  document.getElementById('back-to-top') as HTMLElement;
    const elementPageTobar =  document.getElementById('page-topbar') as HTMLElement;

    if (elementPageTobar && elementBackToTop) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        elementBackToTop.style.display = "block";
        elementPageTobar.classList.add('fixed')
      } else {
        elementBackToTop.style.display = "none";
        elementPageTobar.classList.remove('fixed')
      }
    }
  }

}
