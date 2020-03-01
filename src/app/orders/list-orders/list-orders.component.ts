import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/web-services/order.service';
import list from 'src/app/list.json';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(private ordService: OrderService, private router: Router) { }

  displayedColumns: string[] = ['No', 'id', 'serviceid', 'Actions'];
  dataSource = new MatTableDataSource();

  listActiveOrder(){
    this.ordService.listActiveOrders().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  Edit(element){
    list.push(element);
    this.router.navigate(["edit-orders"]);
  }

  ngOnInit() {
    this.listActiveOrder();
  }

}
