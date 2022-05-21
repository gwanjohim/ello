import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  dataSource: ProductCategory[] = []
  displayedColumns: string[] = ['Name', 'Image', 'Edit'];
  constructor(private apiService: ApiService<Array<ProductCategory>>) {
  }
  ngOnInit(): void {
    this.apiService.apiGet('ProductCategories').subscribe((res) => {
      let response: any = JSON.stringify(res)
      this.dataSource = JSON.parse(response)
    })
  }
}
