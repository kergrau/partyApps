import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// My Services
import { ServiceServicesService } from './web-services/service-services.service'

// My Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ListServicesComponent } from './services/list-services/list-services.component';
import { FormServicesComponent } from './services/form-services/form-services.component';


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
import { EditServiceComponent } from './services/edit-service/edit-service.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    ListServicesComponent,
    FormServicesComponent,
    EditServiceComponent
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
    MatInputModule
  ],
  providers: [ ServiceServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
