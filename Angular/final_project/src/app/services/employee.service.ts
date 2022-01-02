import { Injectable } from '@angular/core';
import { Employee } from '../employees/employee';
import {EMPLOYEE} from './../employees/dummy-data-employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployees():Employee[]{
    return EMPLOYEE;
  }
  
  getEmployee(employeeId:any):Employee{
    const foundEmployee = EMPLOYEE.find(t => t.id == employeeId)
    return foundEmployee;
  }
}
