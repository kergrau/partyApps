import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/web-services/order.service';
import { EmployeeService } from 'src/app/web-services/employee.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Orderemployee } from '../orderemployee';

export interface DialogData {
  employeeid;
}

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(private ordService: OrderService, private router: Router,
    public dialog: MatDialog, private empService: EmployeeService) { }

  displayedColumns: string[] = ['No', 'id', 'serviceid', 'Actions'];
  dataSource = new MatTableDataSource();
  private ord = []


  listActiveOrder(){
    this.ordService.listActiveOrders().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  employeeid;
  AddPersonal(element){
    this.openDialog(element);
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(AddPersonalDialog, {
      width: '250px',
      data: {employeeid: this.employeeid}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
            
      result.forEach(item => {
        //console.log(item);
        let testorder: Orderemployee = new Orderemployee()
        testorder.orderid = element.id;
        testorder.employeeid = item;
        this.ord.push(testorder);
        
      });
      //console.log(this.ord);
      this.ordService.assignPersonal(this.ord).subscribe(
        data => {
          alert("Personal assigned");
          this.router.navigate(['list-orders']);
        }
      );
    });
    
  }

  ngOnInit() {
    this.listActiveOrder();
  }

}


@Component({
  selector: 'AddPersonal-dialog',
  templateUrl: 'addpersonal-dialog.html',
})
export class AddPersonalDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPersonalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private empService: EmployeeService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  emp;
  ngOnInit(){
    this.empService.getListAll().subscribe(
      result => {
        this.emp = result;
      }
    );
  }
}