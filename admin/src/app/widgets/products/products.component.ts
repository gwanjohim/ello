import { Component, OnInit } from '@angular/core';
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
export class ProductsComponent implements OnInit {

  dataSource: Product[] = []
  displayedColumns = ['Image', 'Name', 'ViewCount', 'Price', 'InStock', 'Edit']
  count = 0
  constructor(private apiService: ApiService<Product[]>, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {
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
    // this.router.navigate(['product'], { queryParams: { id: id } })

    this.dialog.open(ProductComponent, {
      width: '500px',
      data: { id: id },
    });
  }

}
