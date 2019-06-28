import { Component } from '@angular/core';
import {NewserviceService} from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //at component level
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'practise2';
  test:string;
  emp:any[];
  constructor(private _newService:NewserviceService){}
  ngOnInit(){
    this.test = this._newService.display();
    this.emp = this._newService.employees;
  }  

}
