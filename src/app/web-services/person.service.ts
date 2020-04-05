import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/persons/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  private BaseUrl = 'https://protected-beyond-58088.herokuapp.com/person';

  createPerson(person) {
    return this.http.post<Person>(this.BaseUrl + '/create', person);
  }
  editPerson(person) {
    return this.http.put<Person>(this.BaseUrl + '/edit', person);
  }
  getlistAll() {
    return this.http.get<Person[]>(this.BaseUrl + '/listPerson');
  }
}
