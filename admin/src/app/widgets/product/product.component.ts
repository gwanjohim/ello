import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/DTOs/product';
import { DialogProductId } from 'src/app/models/utilities/product-id';
import { ApiService } from 'src/app/services/api.service';
import { DialogData } from '../orders-notification/orders-notification.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = {} as Product;


  constructor(private apiService: ApiService<Product>, @Inject(MAT_DIALOG_DATA) public data: DialogProductId, public dialogRef: MatDialogRef<ProductComponent>,) { }

  ngOnInit() {
    this.apiService.apiGet<Product>('Products/byId/' + this.data.id).subscribe(prod => {
      this.product = prod
    })
  }

}
