import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/DTOs/cart-item';
import { Customer } from 'src/app/models/DTOs/customer';
import { CustomerDeliveryDetails } from 'src/app/models/DTOs/customer-delivery-details';
import { Order } from 'src/app/models/DTOs/order';
import { ApiService } from 'src/app/services/api.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string = ''
  order: Order = {} as Order;
  cartItems: Array<CartItem> = [];
  customer: Customer = {} as Customer
  deliveryDetails: CustomerDeliveryDetails = {} as CustomerDeliveryDetails


  constructor(private route: ActivatedRoute, private apiService: ApiService<Order>, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
      this.apiService.apiGet<Order>(`orders/byId/${this.orderId}`).subscribe(res => {
        this.order = res

        this.apiService.apiGet<CustomerDeliveryDetails>(`DeliveryDetails/${this.order.CustomerId}`).subscribe((delDetails) => {
          this.deliveryDetails = delDetails
          console.error(delDetails);
        })

        this.apiService.apiGet<Array<CartItem>>(`CustomersCarts/${this.order.CustomerId}`).subscribe((cartItems) => {
          this.cartItems = cartItems
        })

        this.apiService.apiGet<Customer>(`customers/byId/${this.order.CustomerId}`).subscribe((cust: Customer) => {
          this.customer = cust
        })
      })
    });
  }

  showProdcut(productId:string){
    let result = this.dialog.open(ProductComponent, {
      width: '500px',
      data: productId,//provide product id
      closeOnNavigation: false,
      disableClose: true
    });
  }

}
