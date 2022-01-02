import { Component } from '@angular/core';
import {TEACHERS} from './teachers/dummy-data-teachers';
import { Teacher } from './teachers/teacher';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  year:number = new Date().getFullYear();

  teachers:Teacher[]=TEACHERS;
  
}
