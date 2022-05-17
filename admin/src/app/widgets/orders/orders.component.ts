import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  categories: Order[] = []
  constructor(private apiService: ApiService<Order[]>) {

  }
  ngOnInit(): void {
    this.apiService.apiGet('Orders').subscribe((res) => {
      let jsonObj: any = JSON.stringify(res)
      this.categories = JSON.parse(jsonObj);
    });
  }
}
