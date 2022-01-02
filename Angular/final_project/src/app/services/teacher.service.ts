import { Injectable } from '@angular/core';
import { Teacher } from '../teachers/teacher';
import {TEACHERS} from './../teachers/dummy-data-teachers';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { 
  }

getAllTeachers():Teacher[]{
  return TEACHERS;
}

getTeacher(teacherId:any):Teacher{
  const foundTeacher = TEACHERS.find(t => t.id == teacherId)
  return foundTeacher;
}
}
