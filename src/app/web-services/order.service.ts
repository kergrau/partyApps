import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../orders/order';
import { Orderemployee } from '../orders/orderemployee';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private BaseUrl = 'http://localhost:9090/order';

  listActiveOrders() {
    return this.http.get<Order[]>(this.BaseUrl + '/listActive');
  }

  listDesactiveOrders() {
    return this.http.get<Order[]>(this.BaseUrl + '/listDesactive');
  }

  listActiveOrdersById(id) {
    return this.http.get<Order[]>(this.BaseUrl + '/listById/' + id);
  }

  createOrder(order) {
    return this.http.post<Order>(this.BaseUrl + '/create', order);
  }

  editOrder(order) {
    return this.http.put<Order>(this.BaseUrl + '/edit', order);
  }

  closeOrder(order) {
    return this.http.put<Order>(this.BaseUrl + '/close', order);
  }

  assignPersonal(orderemployee) {
    return this.http.post<Orderemployee[]>(this.BaseUrl + '/assign', orderemployee);
  }
}
