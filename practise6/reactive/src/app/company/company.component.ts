import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  template: `
    <h2>Welcome to Company name</h2>
    <a [routerLink]="['company-list']">view Company</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./company.component.css'],
  
})
export class CompanyComponent {

}
