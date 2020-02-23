import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { Router } from '@angular/router';
import { ServiceServicesService } from '../../web-services/service-services.service';

@Component({
  selector: 'app-form-services',
  templateUrl: './form-services.component.html',
  styleUrls: ['./form-services.component.css']
})
export class FormServicesComponent implements OnInit {

  private services: Service = new Service();
  constructor(private serService: ServiceServicesService, private router: Router) { }

  Create(){

    this.serService.createService(this.services)
    .subscribe(data => {
      alert("Created")
      this.router.navigate(['list-services']);
    });
  }

  ngOnInit() {
  }

}
