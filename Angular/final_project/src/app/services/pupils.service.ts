import { Injectable } from '@angular/core';
import { Pupil } from '../pupils/pupil';
import {PUPILS} from './../pupils/dummy-data-pupils';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  constructor() { }


  getAllPupils():Pupil[]{
    return PUPILS;
  }

  getPupils(pupilId:any):Pupil{
    const foundPupil = PUPILS.find(t => t.id == pupilId)
    return foundPupil;
  }
  getAvgGrades(pupilId:any):number{
    const foundPupil:Pupil = PUPILS.find(t => t.id == pupilId)
    let avg:number=0;
    for (const i in foundPupil.grades) {
         
      avg+= Number(foundPupil.grades[i]);
    }
    return avg/Object.keys(foundPupil.grades).length;
  }
}
