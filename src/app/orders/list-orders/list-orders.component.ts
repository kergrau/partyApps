import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/web-services/order.service';
import { EmployeeService } from 'src/app/web-services/employee.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Orderemployee } from '../orderemployee';
import { MatPaginator } from '@angular/material/paginator';
import list from 'src/app/list.json';

export interface DialogData {
  employeeid;
}

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  employeeid;
  constructor(private ordService: OrderService, private router: Router,
              public dialog: MatDialog,
              private empService: EmployeeService) { }

  displayedColumns: string[] = ['No', 'id', 'serviceid', 'Actions'];
  dataSource = new MatTableDataSource();
  private ord = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  listActiveOrder() {
    this.ordService.listActiveOrders().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }


  AddPersonal(element) {
    this.openDialog(element);
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(AddPersonalDialogComponent, {
      width: '250px',
      data: {employeeid: this.employeeid}
    });

    dialogRef.afterClosed().subscribe(result => {

      result.forEach(item => {
        const testorder: Orderemployee = new Orderemployee();
        testorder.orderid = element.id;
        testorder.employeeid = item;
        this.ord.push(testorder);
      });

      this.ordService.assignPersonal(this.ord).subscribe(
        data => {
          alert('Personal assigned');
          this.router.navigate(['list-orders']);
        }
      );
    });

  }

  Edit(element) {
    list.push(element);
    this.router.navigate(['/edit-orders'])
  }

  ngOnInit() {
    this.listActiveOrder();
  }

}


@Component({
  selector: 'app-add-personal-dialog',
  templateUrl: 'addpersonal-dialog.html',
})
export class AddPersonalDialogComponent implements OnInit {

  emp;
  constructor(
    public dialogRef: MatDialogRef<AddPersonalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private empService: EmployeeService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.empService.getListAll().subscribe(
      result => {
        this.emp = result;
      }
    );
  }
}
