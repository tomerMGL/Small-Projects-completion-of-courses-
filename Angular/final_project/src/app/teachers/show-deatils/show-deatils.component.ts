import { Component , Input, OnInit} from '@angular/core';
import { Teacher } from '../teacher';
import {TeacherService} from './../../services/teacher.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-show-deatils',
  templateUrl: './show-deatils.component.html',
  styleUrls: ['./show-deatils.component.css']
})
export class ShowDeatilsComponent{
  teachers:Teacher[]=this.teachersService.getAllTeachers();

  constructor( private modalService: NgbModal,private teachersService:TeacherService ) { }
  
  row:number=3;
  closeResult = '';

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


getTeachers():void{
  this.teachers=this.teachersService.getAllTeachers();
}

updateName(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.fullName=id.target.value;
}
updateAge(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.age=id.target.value;
}
updateAddress(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.address=id.target.value;
}
updateProfssion(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.profssion=id.target.value;
}

updateClass(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.classArr=id.target.value;
}
updateSeniority(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.seniority=id.target.value;
}
updateNumberOfHourPerMonth(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.numberOfHourPerMonth=id.target.value;
}
updatePayPerHour(id:any):void{

  const found = this.teachers.find(x => x.id == id.target.id ) ;
  found.payPerHour=id.target.value;
}

}
