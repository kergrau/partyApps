import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employees/employee';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private router: Router) { }

  private BaseUrl = "http://localhost:9090/employee";

  private isUnauthorized(error): boolean{
    if(error.status == 401 || error.status == 403 ){
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  getListAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.BaseUrl+"/listAll")
    .pipe(catchError(error => {
      this.isUnauthorized(error);
      return throwError(error);
    } ));
  }
  createEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.BaseUrl+"/create", employee).pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    );
      
  }
  deleteEmployee(id): Observable<any>{
    return this.http.delete<Employee>(this.BaseUrl+"/delete/"+id).pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    );
  }
  updateEmployee(employee): Observable<Employee>{
    return this.http.put<Employee>(this.BaseUrl+"/edit", employee).pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    );
  }

}
