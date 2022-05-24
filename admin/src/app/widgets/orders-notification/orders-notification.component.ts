import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-orders-notification',
  templateUrl: './orders-notification.component.html',
  styleUrls: ['./orders-notification.component.scss']
})



export class OrdersNotificationComponent {

  constructor(
    public dialogRef: MatDialogRef<OrdersNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
