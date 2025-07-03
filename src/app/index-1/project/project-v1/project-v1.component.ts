import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FancyBannerComponent } from '../../default/fancy-banner/fancy-banner.component';

enum PortfolioType {
  All,
  Markating,
  App,
  Design,
  Development,
  Branding,
}

interface Portfolio {
  imgSrc: string,
  link: string,
  type: PortfolioType
}

@Component({
  selector: 'app-project-v1',
  standalone: true,
  imports: [CommonModule,FancyBannerComponent],
  templateUrl: './project-v1.component.html',
  styleUrl: './project-v1.component.scss',
  animations: [
    trigger('rowAdded', [
      transition(':enter', [
        style({ height: 0, opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '400ms ease-out',
          style({ height: '*', opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ProjectV1Component {
  totalProtFolioType = PortfolioType;
  currantPortFolioType = PortfolioType.All;
  filteredDatas: Portfolio[] = [];

  portfolios: Portfolio[] = [
    { imgSrc: 'assets/images/media/img_38.jpg', link: '/digital-agency/project-details', type: PortfolioType.Branding },
    { imgSrc: 'assets/images/media/img_39.jpg', link: '/digital-agency/project-details', type: PortfolioType.Branding },
    { imgSrc: 'assets/images/media/img_40.jpg', link: '/digital-agency/project-details', type: PortfolioType.Development },
    { imgSrc: 'assets/images/media/img_41.jpg', link: '/digital-agency/project-details', type: PortfolioType.Development },
    { imgSrc: 'assets/images/media/img_42.jpg', link: '/digital-agency/project-details', type: PortfolioType.Design },
    { imgSrc: 'assets/images/media/img_43.jpg', link: '/digital-agency/project-details', type: PortfolioType.Design },
    { imgSrc: 'assets/images/media/img_50.jpg', link: '/digital-agency/project-details', type: PortfolioType.App },
    { imgSrc: 'assets/images/media/img_44.jpg', link: '/digital-agency/project-details', type: PortfolioType.App },
    { imgSrc: 'assets/images/media/img_45.jpg', link: '/digital-agency/project-details', type: PortfolioType.Markating },
    { imgSrc: 'assets/images/media/img_47.jpg', link: '/digital-agency/project-details', type: PortfolioType.Markating },
  ];

  ngOnInit(){
    this.assignPortFolio()
  }

  assignPortFolio(type: PortfolioType = PortfolioType.All) {
    this.currantPortFolioType = type;

    this.filterData()
  }

  filterData() {
    if (this.currantPortFolioType !== PortfolioType.All) {
      this.filteredDatas = this.portfolios.filter(x => x.type === this.currantPortFolioType)
    } else {
      this.filteredDatas = this.portfolios;
    }
  }
}
