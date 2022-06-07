import { AfterContentChecked, Component, Inject, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/models/DTOs/order';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterContentChecked {

  displayedColumns: string[] = ['Id', 'CreationDate', 'TotalAmount', 'OrderStatus', 'OrderPaymentOption', 'OrderPaymentStatus'];
  dataSource: Order[] = []
  count = 0
  placedOrders = 0
  dispatchedOrders = 0
  deliveredOrders = 0
  rejectedOrders = 0
  scrolling = { rowRenderingMode: 'virtual' }
  paging = { pageSize: 25 }
  constructor(private apiService: ApiService<Order[]>) {

  }
  ngAfterContentChecked(): void {
    this.placedOrders = this.dataSource.filter(f => f.OrderStatus == OrderStatus.OrderPlaced).length
    this.dispatchedOrders = this.dataSource.filter(f => f.OrderStatus == OrderStatus.OrderDispatched).length
    this.deliveredOrders = this.dataSource.filter(f => f.OrderStatus == OrderStatus.OrderDelivered).length
    this.rejectedOrders = this.dataSource.filter(f => f.OrderStatus == OrderStatus.OrderRejected).length
  }
  ngOnInit(): void {
    this.apiService.apiGet('Orders').subscribe((res) => {
      let jsonObj: any = JSON.stringify(res)
      this.dataSource = JSON.parse(jsonObj);
      this.count = this.dataSource.length
    });
  }

  viewOrder(eventData: any) {
    console.error(eventData.data);

  }
  MoveNextStatus(order: any) {
    console.error(order);

  }
}
