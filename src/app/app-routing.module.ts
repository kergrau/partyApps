import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServicesComponent } from './services/list-services/list-services.component'
import { FormServicesComponent } from './services/form-services/form-services.component'
import { EditServiceComponent } from './services/edit-service/edit-service.component'
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormEmployeesComponent } from './employees/form-employees/form-employees.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { FormPersonsComponent } from './persons/form-persons/form-persons.component';
import { EditPersonsComponent } from './persons/edit-persons/edit-persons.component';
import { ListPersonsComponent } from './persons/list-persons/list-persons.component';
import { FormOrdersComponent } from './orders/form-orders/form-orders.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { EditOrdersComponent } from './orders/edit-orders/edit-orders.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { RoleguardGuard } from './roleguard.guard';


const routes: Routes = [
  {path: 'list-services', component: ListServicesComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'form-services', component: FormServicesComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'edit-services', component: EditServiceComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'list-employees', component: ListEmployeesComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'form-employees', component: FormEmployeesComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'edit-employees', component: EditEmployeesComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'form-persons', component: FormPersonsComponent},
  {path: 'edit-persons', component: EditPersonsComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_USER'}},
  {path: 'list-persons', component: ListPersonsComponent, 
  canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'form-orders', component: FormOrdersComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_USER'}},
  {path: 'list-orders', component: ListOrdersComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'edit-orders', component: EditOrdersComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'my-orders', component: MyOrdersComponent,
   canActivate:[ RoleguardGuard], data: {role: 'ROLE_USER'}},
  {path: 'login', component: LoginComponent}

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
  FormPersonsComponent,
  EditPersonsComponent,
  ListPersonsComponent,
  FormOrdersComponent,
  ListOrdersComponent,
  EditOrdersComponent,
  MyOrdersComponent,
  LoginComponent
]