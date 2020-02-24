import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import list from 'src/app/list.json';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/web-services/employee.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private router: Router, private empService: EmployeeService) { }

  displayedColumns: string[] = ['No', 'name', 'surname', 'phone',
  'email', 'Actions'];
  dataSource = new MatTableDataSource();

  ListAll(){
    this.empService.getListAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  ngOnInit() {
  this.ListAll();
  }

}
