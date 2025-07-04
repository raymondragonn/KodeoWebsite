import { Component } from '@angular/core';
import { ScrollServiceService } from '../../../../services/scroll-service.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus-banner-kodeo-website',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contactus-banner-kodeo-website.component.html',
  styleUrl: './contactus-banner-kodeo-website.component.scss'
})
export class ContactusBannerKodeoWebsiteComponent {
  private subscription!: Subscription;
  form: FormGroup;
  
  constructor(private scrollService: ScrollServiceService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.subscription = this.scrollService.fillContactForm$.subscribe(text => {
      console.log( text);
      this.form.get('subject')?.setValue(text);
    });
  }
}
