import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDriven';
  constructor(){}
  ngOnInit(){}
  Register(regForm:any){
    var firstName = regForm.controls.firstname.value;
    var lastName = regForm.controls.lastname.value;
    var email = regForm.controls.email.value;
    alert(firstName+lastName+email);
    alert(regForm);
  }
}
