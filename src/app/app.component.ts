import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FactComponent } from './fact/fact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { SkillComponent } from './skill/skill.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AboutComponent, SkillComponent, FactComponent,
    ResumeComponent, ServicesComponent, PortfolioComponent, ContactComponent, TestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todayYear: number = 2024;
  totalExp: number = 8;
  email: string = 'pankajkumar.vce@gmail.com';
  emailOffice: string = 'pankaj.kumar@gunaatita.com';
  constructor() {
    this.todayYear = new Date().getFullYear();
    this.totalExp = this.todayYear - 2015 - 1;

  }
}
