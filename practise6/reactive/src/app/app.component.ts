import { Component } from '@angular/core';
import {FormGroup,FormControl,NgForm,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'reactive';
  signupForm : FormGroup;
  FirstName : string = "";
  LastName : string = "";
  Email : string = "";
  Password : string = "";
 
  constructor(private formbulider: FormBuilder ){}
  ngOnInit(){
    this.signupForm = this.formbulider.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required,Validators.maxLength(10)],
      Emailid:['',Validators.required,Validators.email],
      userpassword: ['',Validators.required]
    });
  }
  postData(signupForm:any){
    this.FirstName = signupForm.controls.fname.value;
    this.LastName = signupForm.controls.lname.value;
    this.Email = signupForm.controls.Emailid.value;
    console.log(this.FirstName);
    console.log(this.signupForm.controls);
  }
}
