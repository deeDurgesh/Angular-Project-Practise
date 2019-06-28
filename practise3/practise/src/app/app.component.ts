import { Component, HostListener, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  Student:any[];
  constructor(){
    this.Student =[
      {  studentId: 1,
        name:'durgesh',
        age :25,
        course :'engineering',
        lname:'gupta'
      },
      {studentId: 2,
        name:'ankit',
        age :24,
        course :'mechanical engineering',
        lname:'trivedi'
    },
    {studentId: 3,
      name:'sai',
      age :23,
      course :'computer engineering',
      lname:'sutikshna'
  },
  {studentId: 4,
    name:'ankit',
    age :25,
    course :'computer engineering',
    lname:'yadav'
  }];
  }

  function getMoreStudent()
  {
    this.Student =[
      {  studentId: 1,
        name:'durgesh',
        age :25,
        course :'engineering',
        lname:'gupta'
      },
      {studentId: 2,
        name:'ankit',
        age :24,
        course :'mechanical engineering',
        lname:'trivedi'
      },
      {studentId: 3,
        name:'sai',
        age :23,
        course :'computer engineering',
        lname:'sutikshna'
    },
    {studentId: 4,
      name:'ankit',
      age :25,
      course :'computer engineering',
      lname:'yadav'
    },
    {
      studentId: 5,
      name:'kulsa',
      age :28,
      course :'electrical engineering',
      lname:'rajpurohit'
    }];
  }
 /*  constructor(@Inject(MyServiceService)myserviceService){
    console.log(myserviceService);
  
    console.log('hi,this is from appComponent');
  }
  
  btnClick(){
    alert('u hav nothing to do just click me');
  }

  isValid:boolean =true;
  changeValue(valid){
    this.isValid = valid;
  } */
}
