import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// My Services
import { ServiceServicesService } from './web-services/service-services.service';
import { PersonService } from './web-services/person.service';
import { EmployeeService } from './web-services/employee.service';

// My Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ListServicesComponent } from './services/list-services/list-services.component';
import { FormServicesComponent } from './services/form-services/form-services.component';
import { EditServiceComponent } from './services/edit-service/edit-service.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormEmployeesComponent } from './employees/form-employees/form-employees.component';
import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
import { FormPersonsComponent } from './persons/form-persons/form-persons.component';
import { EditPersonsComponent } from './persons/edit-persons/edit-persons.component';
import { ListPersonsComponent } from './persons/list-persons/list-persons.component';
import { FormOrdersComponent } from './orders/form-orders/form-orders.component';
import { ListOrdersComponent, AddPersonalDialog } from './orders/list-orders/list-orders.component';
import { EditOrdersComponent } from './orders/edit-orders/edit-orders.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { RatingDialog } from './orders/my-orders/my-orders.component';

// Angular Material Component
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'; 

import { StarRatingModule } from 'angular-star-rating';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
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
    RatingDialog,
    AddPersonalDialog,
    LoginComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    StarRatingModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [
    RatingDialog,
    AddPersonalDialog
  ],
  providers: [ 
  ServiceServicesService,
  PersonService,
  EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
