import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { Router } from '@angular/router';
import { ServiceServicesService } from '../../web-services/service-services.service';
import list from 'src/app/list.json';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  private services: Service = new Service();
  constructor(private serService: ServiceServicesService, private router: Router) { }

  Update(){

    this.serService.editService(this.services)
    .subscribe(data => {
      alert("Updated")
      this.router.navigate(['list-services']);
    });
  }

  ngOnInit() {
    
    list.forEach(element => {
      this.services = {
        id: element.id,
        name: element.name
      }
    });
  }

}
