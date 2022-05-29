import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/models/DTOs/order';

@Component({
  selector: 'app-orders-notification',
  templateUrl: './orders-notification.component.html',
  styleUrls: ['./orders-notification.component.scss']
})



export class OrdersNotificationComponent {

  constructor(
    public dialogRef: MatDialogRef<OrdersNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
