import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServicesComponent } from './services/list-services/list-services.component'
import { FormServicesComponent } from './services/form-services/form-services.component'
import { EditServiceComponent } from './services/edit-service/edit-service.component'


const routes: Routes = [
  {path: 'list-services', component: ListServicesComponent},
  {path: 'form-services', component: FormServicesComponent},
  {path: 'edit-services', component: EditServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ListServicesComponent,
  FormServicesComponent,
  EditServiceComponent
]