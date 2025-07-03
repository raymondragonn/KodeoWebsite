import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgbAlertModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formGroup!:FormGroup;
  submitted=false;

  constructor(public fb:FormBuilder){
    this.formGroup = this.fb.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      sub: new FormControl(''),
      dec: new FormControl('',Validators.required),
    })
  }

  submit(){
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return
    }

    this.submitted=true;
    this.formGroup.reset();
  }

}
