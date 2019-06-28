import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  company:any;
  constructor() { }

  ngOnInit() {
    this.company =[
      {
        code:"001",
        name:"durgesh"
      },
      {
        code:"002",
        name:"Ravi"
      },
      {
        code:"003",
        name:"ankit"
      },
    ]
  }

}
