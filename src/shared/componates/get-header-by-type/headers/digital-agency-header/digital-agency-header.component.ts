import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, Renderer2, TemplateRef } from '@angular/core';
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownMenu, NgbDropdownModule, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MENUITEMS } from '../../nav-items/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollServiceService } from '../../../../../app/services/scroll-service.service';

interface DigitalAgencyMenuItems {
  label: string
  link?: string
  isCollapsed: boolean
  subMenus?: SubMenu[]
  scrollId?: string; // Added scrollId property
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
    { label: 'Inicio', link: '', isCollapsed: true },
    { label: 'Servicios', scrollId: 'servicesSection', isCollapsed: true },
    { label: 'Portafolio', scrollId: 'projectsSection', isCollapsed: true },
    {
      label: 'Portafolio Detallado',
      isCollapsed: false,
      subMenus: [
        { label: 'Plataforma Web | AixaCibb', link: '/digital-agency/project-details/1' },
        { label: 'Plataforma Web | InCup', link: '/digital-agency/project-details/2' },
        { label: 'Plataforma Web | Banorte', link: '/digital-agency/project-details/3' },
        { label: 'Plataforma Web | Fac2Go', link: '/digital-agency/project-details/5' },
        { label: 'Tiendas Online | Learnify', link: '/digital-agency/project-details/4' },
      ]
    },
    { label: 'Reseñas', scrollId: 'testimonialsSection', isCollapsed: true },

    { label: 'Preguntas Frecuentes', scrollId: 'faqSection', isCollapsed: true },
  ]

  constructor(private renderer: Renderer2, public scrollService: ScrollServiceService, private el: ElementRef) { }

  ngOnInit() { }
  ngOnDestroy() {
    this.offcanvasService.dismiss()
  }

  scrollToContact() {
    this.scrollService.scrollToElement('contactSection');
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end',panelClass:'sidebar-nav' });
  }

  scrollToBottom() {
    const offset = 2500; 
    window.scrollTo({
      top: document.body.scrollHeight - offset,
      behavior: 'smooth'
    });
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

