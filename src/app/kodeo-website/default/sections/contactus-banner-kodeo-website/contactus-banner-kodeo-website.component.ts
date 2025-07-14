import { Component } from '@angular/core';
import { ScrollServiceService } from '../../../../services/scroll-service.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus-banner-kodeo-website',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contactus-banner-kodeo-website.component.html',
  styleUrl: './contactus-banner-kodeo-website.component.scss'
})
export class ContactusBannerKodeoWebsiteComponent {
  private subscription!: Subscription;
  form: FormGroup;
  step = 1;
  services = [
    'Sitio Web Informativo', 'Landing Page', 'Plataforma Web', 'Portal de Contenido', 'Tienda Online',
    'Otro'
  ];
  formData: any = {
    name: '',
    brandName: '',
    industry: '',
    product: '',
    location: '',
    goal: '',
    service: '',
    budget: '',
    comments: '',
    phone: '',
    email: '',
    language: '',
    referral: ''
  };
  errors: any = {};

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
      if (this.services.includes(text)) {
        this.formData.service = text;
        this.step = 3;
      } else {
        this.form.get('subject')?.setValue(text);
      }
    });
  }

  nextStep() {
    this.errors = {};
    if (this.step === 1) {
      if (!this.formData.name || this.formData.name.trim().length < 2) {
        this.errors.name = 'Por favor ingresa tu nombre.';
        return;
      }
    }
    if (this.step === 2) {
      if (!this.formData.brandName) this.errors.brandName = 'Nombre de marca requerido.';
      if (!this.formData.industry) this.errors.industry = 'Industria requerida.';
      if (!this.formData.product) this.errors.product = 'Producto o servicio requerido.';
      if (!this.formData.location) this.errors.location = 'Ubicación requerida.';
      if (!this.formData.goal) this.errors.goal = 'Meta requerida.';
      if (Object.keys(this.errors).length > 0) return;
    }
    if (this.step === 3) {
      if (!this.formData.service) {
        this.errors.service = 'Selecciona un servicio.';
        return;
      }
    }
    if (this.step === 4) {
      if (!this.formData.budget) {
        this.errors.budget = 'Selecciona un presupuesto.';
        return;
      }
    }
    if (this.step === 5) {
      // Comentarios adicionales pueden ser opcionales
    }
    if (this.step === 6) {
      if (!this.formData.phone && !this.formData.email) {
        this.errors.contact = 'Proporciona al menos un medio de contacto.';
        return;
      }
      if (this.formData.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.formData.email)) {
        this.errors.email = 'Correo electrónico inválido.';
        return;
      }
      if (this.formData.phone && !/^\+?\d{8,15}$/.test(this.formData.phone.replace(/\D/g, ''))) {
        this.errors.phone = 'Teléfono inválido.';
        return;
      }
      if (!this.formData.language) {
        this.errors.language = 'Selecciona un idioma.';
        return;
      }
    }
    if (this.step < 7) this.step++;
  }

  prevStep() {
    this.errors = {};
    if (this.step > 1) this.step--;
  }

  submitForm() {
    this.errors = {};
    if (!this.formData.referral) {
      this.errors.referral = 'Selecciona cómo nos encontraste.';
      return;
    }
    // Construir mensaje para WhatsApp solo con campos llenos
    let msg = `¡Hola! Me gustaría adquirir sus servicios.%0A`;
    const campos = [
      { label: '*Nombre:*', value: this.formData.name },
      { label: '*Marca:*', value: this.formData.brandName },
      { label: '*Industria:*', value: this.formData.industry },
      { label: '*Producto/Servicio:*', value: this.formData.product },
      { label: '*Ubicación:*', value: this.formData.location },
      { label: '*Meta:*', value: this.formData.goal },
      { label: '*Servicio de interés:*', value: this.formData.service },
      { label: '*Presupuesto:*', value: this.formData.budget },
      { label: '*Comentarios:*', value: this.formData.comments },
      { label: '*Teléfono:*', value: this.formData.phone },
      { label: '*Email:*', value: this.formData.email },
      { label: '*Idioma:*', value: this.formData.language },
      { label: '*¿Cómo nos conociste?:*', value: this.formData.referral }
    ];
    campos.forEach(campo => {
      if (campo.value && campo.value.toString().trim() !== '') {
        msg += `${campo.label} ${campo.value}%0A`;
      }
    });
    msg += `%0AEn unos minutos recibirá una respuesta por parte de nosotros. Gracias por contactarse.`;
    const url = `https://wa.me/5218148129494?text=${msg}`;
    window.open(url, '_blank');
  }
}
