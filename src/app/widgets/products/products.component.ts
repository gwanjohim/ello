import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/DTOs/product';
import { ApiService } from 'src/app/services/api.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterContentChecked {

  dataSource: Product[] = []
  displayedColumns = ['Image', 'Name', 'ViewCount', 'Price', 'InStock', 'Edit']

  productsInStock = 0
  productsOutOfStock = 0
  constructor(private apiService: ApiService<Product[]>, public dialog: MatDialog) {
  }
  ngAfterContentChecked(): void {
    this.productsInStock = this.dataSource.filter(f => f.InStock == true).length
    this.productsOutOfStock = this.dataSource.filter(f => f.InStock != true).length
  }

  ngOnInit(): void {
    this.apiService.apiGet('Products').subscribe((res) => {
      let response: any = JSON.stringify(res)
      this.dataSource = JSON.parse(response)
    })
  }

  viewProduct(eventData: any) {
    let result = this.dialog.open(ProductComponent, {
      width: '500px',
      data: eventData.data.Id,//provide product id
      closeOnNavigation: false,
      disableClose: true
    });
    result.afterClosed().subscribe((updatedProduct: Product) => {
      let removePreviousProduct = this.dataSource.filter(prod => prod.Id != updatedProduct.Id)
      removePreviousProduct.push(updatedProduct);
      this.dataSource = removePreviousProduct
    })
  }

}
