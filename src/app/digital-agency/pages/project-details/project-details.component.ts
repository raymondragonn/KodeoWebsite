import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioService, PortfolioItem } from '../../../services/portafolio.service';
import { ActivatedRoute } from '@angular/router';
import { LayoutType } from '../../../../shared/types/layout-type';
import { GetFooterByTypeComponent } from '../../../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { QuoteBannerKodeoWebsiteComponent } from "../../../kodeo-website/default/sections/quote-banner-kodeo-website/quote-banner-kodeo-website.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [GetFooterByTypeComponent, CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  project: PortfolioItem | undefined;
  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortafolioService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.portfolioService.getById(id);
    console.log(this.project);
  }
  allLayout=LayoutType;
}
