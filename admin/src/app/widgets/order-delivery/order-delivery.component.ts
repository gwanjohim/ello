import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss']
})
export class OrderDeliveryComponent implements OnInit {

  showLiveTraffic = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLiveTraffic(){
    this.showLiveTraffic = !this.showLiveTraffic;
  }

}
