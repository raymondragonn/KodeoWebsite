import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-latter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './news-latter.component.html',
  styleUrl: './news-latter.component.scss'
})
export class NewsLatterComponent {
  @Input() img: string = 'assets/images/icon/icon_05.svg';
  @Input() formClass:string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  submit() {
    if (this.email.valid) {
      console.log('Submitted email:', this.email.value);
    } else {
      console.log('Invalid email input');
      this.email.markAsTouched(); // Ensures the error messages display when the button is clicked
    }
  }
}
