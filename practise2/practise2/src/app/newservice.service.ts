import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  employees:any[];
  constructor() { 
    this.employees = [
      {
        empcode:'001' , name:'durgesh'
      },
      {
        empcode:'002' , name:'durgesh gupta'
      },
    ];
  }
  display(){
    return "hello durgesh";
  }
}
