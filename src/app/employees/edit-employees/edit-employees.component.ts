import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/web-services/employee.service';
import { Router } from '@angular/router';
import list from 'src/app/list.json';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  private employees: Employee = new Employee();
  constructor(private empService: EmployeeService, private router: Router) { }

  Update(){
    this.empService.updateEmployee(this.employees)
    .subscribe(data => {
      alert("Updated")
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
