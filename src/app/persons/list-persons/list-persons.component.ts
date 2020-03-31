import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import list from 'src/app/list.json';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/web-services/person.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  constructor(private router: Router, private perService: PersonService) { }

  displayedColumns: string[] = ['No', 'name', 'surname', 'phone',
  'email', 'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static : true}) paginator : MatPaginator;

  ListAll(){
    this.perService.getlistAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  Edit(element){
    list.push(element);
    this.router.navigate(["edit-persons"]);
  }

  ngOnInit() {
    this.ListAll();
  }

}
