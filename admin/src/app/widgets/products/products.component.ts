import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  dataSource: Product[] = []
  displayedColumns = ['Image', 'Name', 'ViewCount', 'Price', 'InStock', 'Edit']
  count = 0
  constructor(private apiService: ApiService<Product[]>, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.apiService.apiGet('Products').subscribe((res) => {
      let response: any = JSON.stringify(res)
      this.dataSource = JSON.parse(response)
      this.count = this.dataSource.length
    })
  }

  viewProduct(eventData: any) {
    var id = eventData.key
    this.router.navigate(['product'], { queryParams: { id: id } })
  }

}
