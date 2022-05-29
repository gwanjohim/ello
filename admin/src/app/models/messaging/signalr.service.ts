import { Injectable } from '@angular/core';
import { ChartModel } from './chart-model';
import * as signalR from "@microsoft/signalr"
import { MatDialog } from '@angular/material/dialog';
import { OrdersNotificationComponent } from 'src/app/widgets/orders-notification/orders-notification.component';
import { Order } from '../DTOs/order';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor(public dialog: MatDialog) { }

  public data: ChartModel[] = [];
  private hubConnection: signalR.HubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://192.168.5.250:5003/hub').build()

  public startConnection() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.error('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener() {
    this.hubConnection.on('orderReceived', (data) => {

      let order:Order = JSON.parse(data);

      this.dialog.open(OrdersNotificationComponent, {
        width: '400px',
        data: order,
      });
      const audio = new Audio('/assets/Ding-sound-effect.mp3')
      audio.play()
    });
  }
}
