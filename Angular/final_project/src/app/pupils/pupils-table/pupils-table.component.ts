import { Component, OnInit } from '@angular/core';
import { PupilsService } from 'src/app/services/pupils.service';
import { Pupil } from '../pupil';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pupils-table',
  templateUrl: './pupils-table.component.html',
  styleUrls: ['./pupils-table.component.css']
})
export class PupilsTableComponent {


  constructor( private pupilsService:PupilsService, private modalService: NgbModal ) { }
  
  pupils:Pupil[] = this.pupilsService.getAllPupils();
  
  getAvgGrades(pupilId:any):number{
    
    return this.pupilsService.getAvgGrades(pupilId);
  }


  
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


  updateName(id:any):void{

    const found = this.pupils.find(x => x.id == id.target.id ) ;
    found.fullName=id.target.value;
  }

  updateAge(id:any):void{

    const found = this.pupils.find(x => x.id == id.target.id ) ;
    found.age=id.target.value;
  }

  updateAddress(id:any):void{

    const found = this.pupils.find(x => x.id == id.target.id ) ;
    found.address=id.target.value;
  }

  updateGrade(id:any):void{

    const found = this.pupils.find(x => x.id == id.target.id ) ;
    found.grades.push(id.target.value);
  }
}
