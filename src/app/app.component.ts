import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
