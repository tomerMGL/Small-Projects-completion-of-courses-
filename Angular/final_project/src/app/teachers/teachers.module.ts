import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDeatilsComponent } from './show-deatils/show-deatils.component';
import { TeacherService } from '../services/teacher.service';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { RoutingModuleModule } from '../routing-module.module';



@NgModule({
  declarations: [
    ShowDeatilsComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    RoutingModuleModule
    
  ],
  providers: [TeacherService]

})
export class TeachersModule { }
