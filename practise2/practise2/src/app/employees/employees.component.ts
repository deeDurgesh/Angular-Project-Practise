import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empDetails:any[];
  constructor(private _empService:EmpserviceService) { }

  ngOnInit() {
    this.empDetails = this._empService.empDetails;
  }

}
