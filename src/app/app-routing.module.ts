import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AditEmployeeComponent } from './adit-employee/adit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ErmFormsComponent } from './erm-forms/erm-forms.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: EmployeesListComponent},
  {path: 'add-employee', component: AditEmployeeComponent},
  {path: 'edit-employee/:id', component: AditEmployeeComponent},
  { path:'erm-form', component: ErmFormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
