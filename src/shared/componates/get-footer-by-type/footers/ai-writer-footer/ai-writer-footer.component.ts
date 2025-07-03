import { Component } from '@angular/core';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';
import { SecFooterNavComponent } from "../../footer-columns/sec-footer-nav/sec-footer-nav.component";
import { NewsLatterComponent } from "../../../news-latter/news-latter.component";

@Component({
  selector: 'app-ai-writer-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent, NewsLatterComponent],
  templateUrl: './ai-writer-footer.component.html',
  styleUrl: './ai-writer-footer.component.scss'
})
export class AiWriterFooterComponent {
  date = Date.now();
  year!: number;

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }
}
