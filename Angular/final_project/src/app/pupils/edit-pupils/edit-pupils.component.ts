import { Component, Input, OnInit } from '@angular/core';
import { PupilsService } from 'src/app/services/pupils.service';
import { Pupil } from '../pupil';


@Component({
  selector: 'app-edit-pupils',
  templateUrl: './edit-pupils.component.html',
  styleUrls: ['./edit-pupils.component.css']
})
export class EditPupilsComponent implements OnInit {
  
  @Input() pupil:Pupil;

  constructor(private pupilsService:PupilsService) { }

  ngOnInit(): void {
  }



}
