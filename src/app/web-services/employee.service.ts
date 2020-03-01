import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employees/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private BaseUrl = "http://localhost:9090/employee";

  getListAll(){
    return this.http.get<Employee[]>(this.BaseUrl+"/listAll");
  }
  createEmployee(employee){
    return this.http.post<Employee>(this.BaseUrl+"/create", employee);
  }
  deleteEmployee(id){
    return this.http.delete<Employee>(this.BaseUrl+"/delete/"+id);
  }
  updateEmployee(employee){
    return this.http.put<Employee>(this.BaseUrl+"/edit", employee);
  }
}
