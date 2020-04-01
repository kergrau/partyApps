import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employees/employee';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthService) { }

  private BaseUrl = 'http://localhost:9090/employee';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getListAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.BaseUrl + '/listAll',
     /*{headers: this.addAuthorization()}*/)/*.pipe(catchError(error => {
      this.isUnauthorized(error);
      return throwError(error);
    } ))*/;
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.BaseUrl + '/create', employee,
      /*{headers: this.addAuthorization()}*/)/*.pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    )*/;

  }
  deleteEmployee(id): Observable<any> {
    return this.http.delete<Employee>(this.BaseUrl + '/delete/' + id,
      /*{headers: this.addAuthorization()}*/)/*.pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    )*/;
  }
  updateEmployee(employee): Observable<Employee> {
    return this.http.put<Employee>(this.BaseUrl + '/edit', employee,
    /*{headers: this.addAuthorization()}*/)/*.pipe(
      catchError(
        error => {
          if (this.isUnauthorized(error)){
            return throwError(error);
          }
        }
      )
    )*/;
  }

}
