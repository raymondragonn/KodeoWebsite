import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortafolioService, PortfolioItem } from '../../../../services/portafolio.service';

@Component({
  selector: 'app-latestwork-banner-kodeo-website',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './latestwork-banner-kodeo-website.component.html',
  styleUrl: './latestwork-banner-kodeo-website.component.scss'
})


export class LatestworkBannerKodeoWebsiteComponent {
  portfolioItems: PortfolioItem[] = [];
  constructor(private portfolioService: PortafolioService) {

  }

  ngOnInit() {
    this.portfolioItems = this.portfolioService.getAll();
  }
  
  


}
