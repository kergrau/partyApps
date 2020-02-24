import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServicesComponent } from './services/list-services/list-services.component'
import { FormServicesComponent } from './services/form-services/form-services.component'
import { EditServiceComponent } from './services/edit-service/edit-service.component'
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormEmployeesComponent } from './employees/form-employees/form-employees.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { FormPersonsComponent } from './persons/form-persons/form-persons.component';


const routes: Routes = [
  {path: 'list-services', component: ListServicesComponent},
  {path: 'form-services', component: FormServicesComponent},
  {path: 'edit-services', component: EditServiceComponent},
  {path: 'list-employees', component: ListEmployeesComponent},
  {path: 'form-employees', component: FormEmployeesComponent},
  {path: 'edit-employees', component: EditEmployeesComponent},
  {path: 'form-persons', component: FormPersonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ListServicesComponent,
  FormServicesComponent,
  EditServiceComponent,
  ListEmployeesComponent,
  FormEmployeesComponent,
  EditEmployeesComponent,
  FormPersonsComponent
]