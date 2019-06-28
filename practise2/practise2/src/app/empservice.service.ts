import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  empDetails:any[];
  constructor() {
    this.empDetails = [
      {
        empCode: '001', name: 'durgesh', lname: 'gupta'
      },
      {
        empCode: '002', name: 'ankit ', lname: 'trivedi'
      },
      {
        empCode: '003', name: 'sai', lname: 'sutikshna'
      },
    ];
   }

}
