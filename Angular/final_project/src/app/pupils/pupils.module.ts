import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsTableComponent } from './pupils-table/pupils-table.component';
import { EditPupilsComponent } from './edit-pupils/edit-pupils.component';



@NgModule({
  declarations: [
    
  
    PupilsTableComponent,
            EditPupilsComponent,
            
  ],
  imports: [
    CommonModule
  ]
})
export class PupilsModule { }
