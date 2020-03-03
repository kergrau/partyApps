import { Component, OnInit, Inject} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/web-services/order.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  rating;
}

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private ordService: OrderService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['No', 'id', 'serviceid', 'Actions'];
  dataSource = new MatTableDataSource();

  listActiveOrder(){
    this.ordService.listActiveOrdersById(14).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  Close(element){
    this.openDialog(element);
    console.log(element);
  }

  rating;
  openDialog(element): void {
    const dialogRef = this.dialog.open(RatingDialog, {
      width: '250px',
      data: {rating: element.rating}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      element.rating = result
      this.ordService.closeOrder(element).subscribe();
      
    });
  }
  
  ngOnInit() {
    this.listActiveOrder();
  }

}

//Dialog for rating service
@Component({
  selector: 'rating-dialog',
  templateUrl: 'rating-dialog.html',
})
export class RatingDialog {

  constructor(
    public dialogRef: MatDialogRef<RatingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
