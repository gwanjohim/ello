import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId: string = ''
  product: Product = {} as Product;
  constructor(private route: ActivatedRoute, private apiService: ApiService<Product>) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      this.apiService.apiGet<Product>('Products/byId/' + this.productId).subscribe(prod => {

        this.product = prod
      })
    });
  }

}
