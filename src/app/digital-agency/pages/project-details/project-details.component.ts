import { Component } from '@angular/core';
import { PortafolioService, PortfolioItem } from '../../../services/portafolio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
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

}
