import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';
import { ServiceServicesService } from '../../web-services/service-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
  styleUrls: ['./form-services.component.css']
})
export class FormServicesComponent implements OnInit {

  private services: Service = new Service();
  constructor(private serService: ServiceServicesService, private router: Router,
    private snackBar: MatSnackBar) { }

  SnackyCreated(){
    this.snackBar.open('Created', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  Create(){

    this.serService.createService(this.services)
    .subscribe(data => {
      this.SnackyCreated();
      this.router.navigate(['list-services']);
    });
  }

  ngOnInit() {
  }

}
