import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'pankajkumar.vce@gmail.com';
  contactData: any = {};
  contactForm: FormGroup;
  submitted: Boolean = false;
  apiKey: string = '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';
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      messgae: new FormControl('', [Validators.required]),
    });
  }
  sendEmail(data: any) {
    debugger
    this.submitted = true;
    if (this.contactForm.valid) {
      const emailData = {
        personalizations: [
          {
            to: [{ email: 'pankaj.kumar@gunaatita.com' }]
          }
        ],
        from: { email: 'pankaj.kumar@gunaatita.com' },
        subject: data.subject,
        content: [
          {
            type: 'text/plain',
            value: 'from :' + data.recipent + ',Mail Body:' + data.message
          }
        ]
      };

      this.http.post('https://api.sendgrid.com/v3/mail/send', emailData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*'
        }
      })
        .subscribe(response => {
          console.log('Email sent successfully:', response);
        }, error => {
          console.error('Error sending email:', error);
        });
    }
  }
}
