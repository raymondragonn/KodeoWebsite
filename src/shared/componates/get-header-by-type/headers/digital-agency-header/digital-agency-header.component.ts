import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, Renderer2, TemplateRef } from '@angular/core';
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownMenu, NgbDropdownModule, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MENUITEMS } from '../../nav-items/menu-data';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ScrollServiceService } from '../../../../../app/services/scroll-service.service';
import { ActivatedRoute } from '@angular/router';

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
  isInSubmenu: boolean = false;
  digitalMenusItems: DigitalAgencyMenuItems[] = [
    { label: 'Inicio', link: '', isCollapsed: true },
    { label: 'Servicios', scrollId: 'servicesSection', isCollapsed: true },
    {
      label: 'Portafolio',
      scrollId: 'projectsSection',
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
    { label: 'Sobre Nosotros', link: 'aboutUs', scrollId: 'aboutSection', isCollapsed: true}
  ]
  

  constructor(private router: Router, private renderer: Renderer2, public scrollService: ScrollServiceService, private el: ElementRef, private route: ActivatedRoute) { }

  ngOnInit() { }
  ngOnDestroy() {
    this.offcanvasService.dismiss()
  }

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  verificarSubMenu(menu: any){
    console.log(menu);
    if(menu == 'aboutSection'){
      this.router.navigate(['/aboutUs']);
    }
    
    // this.router.navigate([submenu.link]).then(() => {
    //   // Opcional: cerrar offcanvas si lo estás usando
    //   // this.offcanvas.dismiss();
    
    //   // Recargar la página completa
    //   window.location.reload();
    // });
    // window.location.reload();
    
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

  goToContact() {
    this.router.navigate(['/contact']);
  }

  scrollToSection(sectionId: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/?')) {
      // Ya estamos en home, solo hacer scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // No estamos en home, navegar y pasar el parámetro
      this.router.navigate(['/'], { queryParams: { section: sectionId } });
    }
  }

  // toggleCollapse ahora solo debe llamarse desde la flecha en el HTML, no desde el texto del menú.
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

