import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practise1';
  constructor(private router:Router){}
  student(){
    this.router.navigate(['/student']);
  }
  Countrydetails:any[] = 
  [
    {
      country:'India',
      people:[
        {
          name:'durgesh',
        },
        {
          name:'ankit',
        },
        {
          name:'saurabh',
        },
      ]
    },
    {
      country:'UK',
      people:[
        {
          name:'rachel',
        },
        {
          name:'jack',
        },
        {
          name:'judith',
        },
      ]
    }
  ];

  people:any[] = [
    {
      name:'durgesh',
      country:'india'
    },
    {
      name:'judith',
      country:'uk'
    },
    {
      name:'charlie',
      country:'usa'
    },
    {
      name:'kim',
      country:'china'
    },
    {
      name:'ramesh',
      country:'india'
    },
    {
      name:'alan',
      country:'usa'
    }
  ];

  getColor(country)
  {
    switch(country)
    {
      case 'india':
        return 'blue';
      case 'usa':
        return 'green';
      case 'uk':
        return 'black';
        case 'china':
          return 'skyblue';
    }
  }

  users = ['durgesh','ankit','sai','ankit' ];

 getCssClass(flag:string){
  let cssClass;
  if(flag=="mode"){
    cssClass={
      'one':true,
      'two':true,
    }
  }
  else{
    cssClass={
      'three':false,
      'four':false,
    }
  }
  return cssClass;
 }

 fname:string= 'durgesh';
 showMessage(){
   alert('hello');
 }
 data:string = 'durgesh';
 data1:string = 'gupta';

 employee:any[] = [
   {code:'emp001',name:'durgesh',salary:50000},
   {code:'emp002',name:'ankit',salary:5000},
   {code:'emp003',name:'kulsa',salary:500},
   {code:'emp004',name:'sai',salary:8500}
 ];
 employee1:any[] = [
  {code:'emp001',name:'durgesh',gender:'male',salary:50000},
  {code:'emp002',name:'ankit',gender:'female',salary:5000},
  {code:'emp003',name:'kulsa',gender:'female',salary:500},
  {code:'emp004',name:'sai',gender:'male',salary:8500}
];
}
