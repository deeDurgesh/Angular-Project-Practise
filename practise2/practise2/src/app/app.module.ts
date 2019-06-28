import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewserviceService } from './newservice.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmpserviceService } from './empservice.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewserviceService,EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
