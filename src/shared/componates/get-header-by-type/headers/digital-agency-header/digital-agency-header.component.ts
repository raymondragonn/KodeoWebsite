import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, Renderer2, TemplateRef } from '@angular/core';
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownMenu, NgbDropdownModule, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MENUITEMS } from '../../nav-items/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DigitalAgencyMenuItems {
  label: string
  link?: string
  isCollapsed: boolean
  subMenus?: SubMenu[]
}

interface SubMenu {
  label: string
  link?: string
}
@Component({
  selector: 'app-digital-agency-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule],
  templateUrl: './digital-agency-header.component.html',
  styleUrl: './digital-agency-header.component.scss'
})
export class DigitalAgencyHeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  digitalMenusItems: DigitalAgencyMenuItems[] = [
    {
      label: 'Home',
      isCollapsed: true,
      subMenus: [
        { label: 'Payment Service', link: '/' },
        { label: 'AI Writer', link: '/ai-writer' },
        { label: 'Website Builder', link: '/website-builder' },
        { label: 'CRM', link: '/crm' },
        { label: 'Project Management', link: '/project-management' },
        { label: 'Mobile App Landing', link: '/mobile-app-landing' },
        { label: 'Digital Agency', link: '/digital-agency' },
        { label: 'Help Desk', link: '/help-desk' },
        { label: 'Web Hosting', link: '/web-hosting' },
        { label: 'Cyber Security', link: '/cyber-security' },
      ]
    },
    {
      label: 'Portfolio',
      isCollapsed: true,
      subMenus: [
        { label: 'Project-1', link: '/project-v1' },
        { label: 'Project-2', link: '/ai-writer/project-v2' },
        { label: 'Project-3', link: 'project-v3' },
        { label: 'Project-4', link: 'project-v4' },
        { label: 'Project-5', link: '/project-management/project-v5' },
        { label: 'Project-6', link: '/ai-writer/project-v6' },
        { label: 'Project Details', link: 'project-details' },
      ]
    },
    {
      label: 'Pages',
      isCollapsed: true,
      subMenus: [
        { label: 'About Us', link: '/about-us-v1' },
        { label: 'Team', link: '/team-v1' },
        { label: 'Service', link: '/service-v1' },
        { label: 'Pricing', link: '/pricing-v1' },
        { label: 'Faq`s', link: '/faq-v1' },
      ]
    },
    { label: 'News', link: '/digital-agency/blog-v3', isCollapsed: true },
    {
      label: 'Contact',
      isCollapsed: true,
      subMenus: [
        { label: 'Contact Us-1', link: '/contact-v1' },
        { label: 'Contact Us-2', link: '/ai-writer/contact-v2' },
      ],
    },
  ]

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() { }
  ngOnDestroy() {
    this.offcanvasService.dismiss()
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end',panelClass:'sidebar-nav' });
  }

  toggleCollapse(menu: DigitalAgencyMenuItems): void {
    if (!menu.subMenus?.length) {
      return
    }

    this.digitalMenusItems.forEach(item => {
      if (item !== menu) {
        item.isCollapsed = true;
      }
    });

    menu.isCollapsed = !menu.isCollapsed;
  }
}

