import { Component, Input, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teachers:Teacher[]=this.teachersService.getAllTeachers();
  @Input() teacher:Teacher;
  @Input() updateName(id:any){};
  constructor(private teachersService:TeacherService) { }
  
  ngOnInit(): void {
    
  }
    
}
