import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/web-services/order.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from 'src/app/web-services/auth.service';
import { MatPaginator } from '@angular/material/paginator';

export interface DialogData {
  rating;
}

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  rating;
  constructor(private ordService: OrderService, public dialog: MatDialog,
              private authService: AuthService) { }

  displayedColumns: string[] = ['No', 'id', 'serviceid', 'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  listActiveOrder() {
    const id = this.authService.getIdPerson(this.authService.token);

    this.ordService.listActiveOrdersById(id).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  Close(element) {
    this.openDialog(element);
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      width: '250px',
      data: {rating: element.rating}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      element.rating = result;
      this.ordService.closeOrder(element).subscribe();

    });
  }

  ngOnInit() {
    this.listActiveOrder();
  }

}

// Dialog for rating service
@Component({
  selector: 'app-rating-dialog',
  templateUrl: 'rating-dialog.html',
})
export class RatingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
