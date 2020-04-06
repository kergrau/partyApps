import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/web-services/employee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-employees',
  templateUrl: './form-employees.component.html',
  styleUrls: ['./form-employees.component.css']
})
export class FormEmployeesComponent implements OnInit {

  public employees: Employee = new Employee();
  constructor(private empService: EmployeeService, private router: Router,
              private snackBar: MatSnackBar) { }

  SnackyCreate() {
    this.snackBar.open('Created', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  Create() {
    this.empService.createEmployee(this.employees).subscribe(
      data => {
        this.SnackyCreate();
        this.router.navigate(['list-employees']);
      }
    );
  }

  ngOnInit() {
  }

}
