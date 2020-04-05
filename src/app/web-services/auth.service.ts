import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../persons/person';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _person: Person;
  private _token: string;

  public get person(): Person {
    if (this._person != null) {
      return this._person;

    } else if (sessionStorage.getItem('person') != null) {

        this._person = JSON.parse(sessionStorage.getItem('person')) as Person;
        return this._person;
    }

    return new Person();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;

    } else if (sessionStorage.getItem('token') != null) {
        this._token = sessionStorage.getItem('token');
        return this._token;
    }

    return null;
  }

  constructor(private http: HttpClient) { }

  private BaseUrl = 'https://protected-beyond-58088.herokuapp.com/oauth/token';
  private credentials = btoa('partyApp' + ':' + '123456');
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + this.credentials});

  login(person: Person): Observable<any> {
    const BaseUrl = 'https://protected-beyond-58088.herokuapp.com/oauth/token';
    const credentials = btoa('partyApp' + ':' + '123456');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials});

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', person.email);
    params.set('password', person.password);

    return this.http.post<any>(BaseUrl, params.toString(), { headers: httpHeaders});
  }

  savePerson(accessToken: string) {
    const payload = this.getPayload(accessToken);
    this._person = new Person();
    this._person.name = payload.name;
    this._person.surname = payload.surname;
    this._person.email = payload.email;
    this._person.roles = payload.authorities;

    sessionStorage.setItem('person', JSON.stringify(this._person));
  }

  saveToken(accessToken: string) {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  getPayload(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  getIdPerson(accessToken: string) {
    return this.getPayload(accessToken).id;
  }

  isAuthenticated(): boolean {
    const payload = this.getPayload(this.token);
    if (payload != null && payload.user_name &&
       payload.user_name.length > 0) {
      return true;
    }
    return false;
  }

  logout() {
    this._token = null;
    this._person = null;
    sessionStorage.clear();
    sessionStorage.removeItem('person');
    sessionStorage.removeItem('token');
  }

  hasRole(role: string): boolean {
    if (this.person.roles.includes(role)) {
      return true;
    }
    return false;
  }
}
