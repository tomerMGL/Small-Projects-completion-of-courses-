import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employees/employee-table/employee-table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PupilsTableComponent } from './pupils/pupils-table/pupils-table.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { ShowDeatilsComponent } from './teachers/show-deatils/show-deatils.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'teacher' , component: ShowDeatilsComponent},
  { path: 'pupils' , component: PupilsTableComponent},
  { path: 'employees' , component: EmployeeTableComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home' , component: HomePageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModuleModule { }
