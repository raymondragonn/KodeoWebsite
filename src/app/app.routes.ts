import { Routes } from '@angular/router';
import { Index1Component } from './index-1/index-1.component';
import { DefaultComponent } from './index-1/default/default.component';
import { AboutUsV1Component } from './index-1/pages/essential/about-us-v1/about-us-v1.component';
import { TeamV1Component } from './index-1/pages/essential/team-v1/team-v1.component';
import { ServiceV1Component } from './index-1/pages/features/service-v1/service-v1.component';
import { FaqV1Component } from './index-1/pages/others/faq-v1/faq-v1.component';
import { PageNotFoundComponent } from './index-1/pages/others/page-not-found/page-not-found.component';
import { ContactComponent } from './index-1/contact/contact.component';
import { ProjectV1Component } from './index-1/project/project-v1/project-v1.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SignInComponent } from './auth/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/auth/pages/sign-up/sign-up.component';
import { DefaultWebsiteBuilderComponent } from './website-builder/default-website-builder/default-website-builder.component';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { ProjectV6Component } from './index-1/project/project-v6/project-v6.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectManagementDefaultComponent } from './project-management/default/project-management-default/project-management-default.component';
import { PricingV2Component } from './project-management/pages/features/pricing-v2/pricing-v2.component';
import { ProjectV5Component } from './project-management/project/project-v5/project-v5.component';
import { MobileAppLandingComponent } from './mobile-app-landing/mobile-app-landing.component';
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component';
import { MobileAppLandingDefaultComponent } from './mobile-app-landing/default/mobile-app-landing-default/mobile-app-landing-default.component';
import { DegitalAgencyDefaultComponent } from './digital-agency/default/degital-agency-default/degital-agency-default.component';
import { BlogV3Component } from './digital-agency/blog/blog-v3/blog-v3.component';
import { BlogDetailsComponent } from './digital-agency/blog/blog-details/blog-details.component';
import { BlogV1Component } from './digital-agency/blog/blog-v1/blog-v1.component';
import { ProjectV3Component } from './digital-agency/pages/project-v3/project-v3.component';
import { ProjectDetailsComponent } from './digital-agency/pages/project-details/project-details.component';
import { KodeoWebsiteComponent } from './kodeo-website/kodeo-website.component';
import { DefaultComponent as DefaultKodeoWebsiteComponent } from './kodeo-website/default/default.component';

export const routes: Routes = [
  {
    path: 'index-1',
    component: Index1Component,
    children: [
      { path: '', component: DefaultComponent },
      { path: 'about-us-v1', component: AboutUsV1Component },
      { path: 'team-v1', component: TeamV1Component },
      { path: 'service-v1', component: ServiceV1Component },
      { path: 'faq-v1', component: FaqV1Component },
      { path: '404', component: PageNotFoundComponent },
      { path: 'contact-v1', component: ContactComponent },
      { path: 'project-v1', component: ProjectV1Component },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', component: SignInComponent, },
      { path: 'signin', component: SignInComponent, },
      { path: 'signup', component: SignUpComponent, },
    ]
  },
  {
    path: 'website-builder',
    component: WebsiteBuilderComponent,
    children: [
      { path: '', component: DefaultWebsiteBuilderComponent },
      { path: 'signin', component: SignInComponent, },
      { path: 'signup', component: SignUpComponent, },
    ]
  },
  {
    path: 'project-management',
    component: ProjectManagementComponent,
    children: [
      { path: '', component: ProjectManagementDefaultComponent },
      { path: 'project-v5', component: ProjectV5Component },
      { path: 'pricing-v2', component: PricingV2Component },
    ]
  },
  {
    path: 'mobile-app-landing',
    component: MobileAppLandingComponent,
    children: [
      { path: '', component: MobileAppLandingDefaultComponent },
    ]
  },
  {
    path: 'digital-agency',
    component: DigitalAgencyComponent,
    children: [
      { path: '', component: DegitalAgencyDefaultComponent},
      { path: 'blog-v1', component: BlogV1Component },
      { path: 'blog-v3', component: BlogV3Component},
      { path: 'blog-details', component: BlogDetailsComponent},
      { path: 'project-v3', component: ProjectV3Component},
      { path: 'project-details', component: ProjectDetailsComponent },
    ]
  },
  {
    path: '',
    component: KodeoWebsiteComponent,
    children: [
      { path: '', component: DefaultKodeoWebsiteComponent},
    ]
  }
]; 
