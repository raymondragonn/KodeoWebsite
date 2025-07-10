import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  private fillContactFormSource = new Subject<string>();
  fillContactForm$ = this.fillContactFormSource.asObservable();
  constructor(private router: Router) { }

  scrollToElement(elementId: string) {
  const el = document.getElementById(elementId);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Redirige al home
    this.router.navigate(['/']).then(() => {
      // Espera a que el DOM cargue en el home antes de intentar scroll
      setTimeout(() => {
        const retryEl = document.getElementById(elementId);
        if (retryEl) {
          retryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // puedes ajustar el delay si es necesario
    });
  }
}

  fillContactForm(text: string) {
    this.fillContactFormSource.next(text);
  }
}
