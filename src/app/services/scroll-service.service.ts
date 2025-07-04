import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  private fillContactFormSource = new Subject<string>();
  fillContactForm$ = this.fillContactFormSource.asObservable();
  constructor() { }

  scrollToElement(elementId: string) {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  fillContactForm(text: string) {
    this.fillContactFormSource.next(text);
  }
}
