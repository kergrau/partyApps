import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/web-services/employee.service';
import { Router } from '@angular/router';
import list from 'src/app/list.json';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  private employees: Employee = new Employee();
  constructor(private empService: EmployeeService, private router: Router,
    private snackBar: MatSnackBar) { }

    SnackyUpdate(){
      this.snackBar.open('Updated', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snacky']
      });
    }

  Update(){
    this.empService.updateEmployee(this.employees)
    .subscribe(data => {
      this.SnackyUpdate();
      this.router.navigate(['list-employees']);
    });
  }

  ngOnInit() {
    list.forEach(element => {
      this.employees = {
        id: element.id,
        name: element.name,
        surname: element.surname,
        phone: element.phone,
        email: element.email
      }
    });
  }

}
