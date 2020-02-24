import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/web-services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-employees',
  templateUrl: './form-employees.component.html',
  styleUrls: ['./form-employees.component.css']
})
export class FormEmployeesComponent implements OnInit {

  private employees: Employee = new Employee();
  constructor(private empService: EmployeeService, private router: Router) { }

  Create(){
    this.empService.createEmployee(this.employees).subscribe(
      data => {
        alert("Created");
        this.router.navigate(['list-employees']);
      }
    );
  }

  ngOnInit() {
  }

}
