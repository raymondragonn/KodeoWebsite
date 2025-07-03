import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-v1',
  standalone: true,
  imports: [NgbAccordionModule,NgbModule],
  templateUrl: './faq-v1.component.html',
  styleUrl: './faq-v1.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FaqV1Component {

}
