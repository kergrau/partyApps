import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceServicesService } from '../../web-services/service-services.service';
import { MatTableDataSource } from '@angular/material/table';
import list from 'src/app/list.json';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  constructor(private serService: ServiceServicesService, private router: Router) { }

  displayedColumns: string[] = ['No', 'name', 'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static : true}) paginator : MatPaginator;

  listAll(){
    this.serService.getListServices().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  Delete(element){
    this.serService.deleteService(element.id)
    .subscribe(data => {
      alert("Deleted");
      this.listAll();
    });
  }

  Edit(element){
    list.push(element);
    this.router.navigate(['edit-services']);
  }

  ngOnInit() {
    this.listAll();
  }

}
