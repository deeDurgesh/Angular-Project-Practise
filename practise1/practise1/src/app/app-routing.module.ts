import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EnployeeComponent } from './enployee/enployee.component';

const routes: Routes = [
 /*  //redirectTo concept
  //{path:'', redirectTo:'student', pathMatch:'full'},
{path:'student' , component:StudentComponent},
{path:'studentdetchild-routeails' , component:StudentdetailsComponent},
{path:'studentregistration', component:StudentregistrationComponent},
//wildcard route
{path:'**', component:PageNotFoundComponent}, */
//child-route
{path:'student',
  children:[
    {path:'', component:StudentComponent},
    {
      path:'studentdetails' , component:StudentdetailsComponent
    },
    {
        path:'studentregistration', component:StudentregistrationComponent
    },
  ]
},
  {
    path:'employee',
    children:[
      {path:'',component:EnployeeComponent},
      {path:'employeedetail', component:EmployeedetailComponent}
    ]
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
