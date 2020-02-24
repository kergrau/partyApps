import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/persons/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  private BaseUrl = "http://localhost:9090/person";

  createPerson(person){
    return this.http.post<Person>(this.BaseUrl+"/create", person);
  }
}
