import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TeacherService} from './services/teacher.service';
import { AppComponent } from './app.component';
import { RoutingModuleModule } from './routing-module.module';
import { CommonModule } from '@angular/common';
import {TeachersModule} from './teachers/teachers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PupilsService } from './services/pupils.service';
import { PupilsModule } from './pupils/pupils.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeService } from './services/employee.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModuleModule,
    CommonModule,
    TeachersModule,
    BrowserAnimationsModule,
    NgbModule,
    PupilsModule,
    EmployeesModule
  ],
  providers: [TeacherService,PupilsService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
