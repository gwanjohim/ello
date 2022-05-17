import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productCategories: Product[] = []
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.apiGet('Products').subscribe((res) => {
      let response: any = JSON.stringify(res)
      this.productCategories = JSON.parse(response)
    })
  }

}
