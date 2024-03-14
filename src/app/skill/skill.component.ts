import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  skillSet:any=[];
  constructor()
  {
    this.skillSet.push({name:'C#',value:100});
    this.skillSet.push({name:'Microsoft SQL Server',value:100});
    this.skillSet.push({name:'Angular/TypeScript',value:90});
    this.skillSet.push({name:'Asp.Net Core',value:99});
    this.skillSet.push({name:'Entity Framework',value:95});
    this.skillSet.push({name:'Web API',value:100});
    this.skillSet.push({name:'LINQ',value:100});
    this.skillSet.push({name:'Object-Oriented Programming',value:100});
  }
}
