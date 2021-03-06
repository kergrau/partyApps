import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import list from 'src/app/list.json';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/web-services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private router: Router, private empService: EmployeeService,
              private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['No', 'name', 'surname', 'phone',
    'email', 'Actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static : true}) paginator: MatPaginator;

  ListAll() {
    this.empService.getListAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  SnackyDelete() {
    this.snackBar.open('Deleted', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  Delete(element) {
    this.empService.deleteEmployee(element.id).subscribe(
      data => {
        this.SnackyDelete();
        this.ListAll();
      }
    );
  }

  Edit(element) {
    list.push(element);
    this.router.navigate(['edit-employees']);
  }



  ngOnInit() {
    this.ListAll();
  }

}
