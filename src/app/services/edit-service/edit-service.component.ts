import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';
import { ServiceServicesService } from '../../web-services/service-services.service';
import list from 'src/app/list.json';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  public services: Service = new Service();
  constructor(private serService: ServiceServicesService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  SnackyUpdate() {
    this.snackBar.open('Updated', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  Update() {

    this.serService.editService(this.services)
    .subscribe(data => {
      this.SnackyUpdate();
      this.router.navigate(['list-services']);
    });
  }

  ngOnInit() {
    list.forEach(element => {
      this.services = {
        id: element.id,
        name: element.name
      };
    });
  }

}
