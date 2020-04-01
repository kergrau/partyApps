import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Service } from '../services/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceServicesService {

  constructor(private http: HttpClient) { }
  private BaseUrl = 'http://localhost:9090/service';

  getListServices() {
    return this.http.get<Service[]>(this.BaseUrl + '/listAll');
  }
  createService(service) {
    return this.http.post<Service>(this.BaseUrl + '/create', service);
  }
  deleteService(id) {
    return this.http.delete<Service>(this.BaseUrl + '/delete/' + id);
  }
  editService(service) {
    return this.http.put<Service>(this.BaseUrl + '/edit', service);
  }
}
