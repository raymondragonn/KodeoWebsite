import { Component } from '@angular/core';
import { FirstFooterNavComponent } from '../../footer-columns/first-footer-nav/first-footer-nav.component';
import { SecFooterNavComponent } from '../../footer-columns/sec-footer-nav/sec-footer-nav.component';
import { ThreeFooterNavComponent } from '../../footer-columns/three-footer-nav/three-footer-nav.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsLatterComponent } from "../../../news-latter/news-latter.component";

@Component({
  selector: 'app-payment-service-footer',
  standalone: true,
  imports: [FirstFooterNavComponent, SecFooterNavComponent, ThreeFooterNavComponent, ReactiveFormsModule, CommonModule, NewsLatterComponent],
  templateUrl: './payment-service-footer.component.html',
  styleUrl: './payment-service-footer.component.scss'
})
export class PaymentServiceFooterComponent {

  date = Date.now();
  year!: number;

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    const currentDate = new Date(this.date);
    this.year = currentDate.getFullYear();
  }

  submit(){
    if (this.email.valid) {
      console.log('Submitted email:', this.email.value);
    } else {
      console.log('Invalid email input');
      this.email.markAsTouched(); // Ensures the error messages display when the button is clicked
    }
  }
}
