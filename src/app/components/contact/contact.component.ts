import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translationService = inject(TranslationService);

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  t(key: string): string {
    return this.translationService.translate(key);
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.formData = { name: '', email: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }
}
