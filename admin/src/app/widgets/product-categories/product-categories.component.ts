import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ApiService } from 'src/app/services/api.service';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit , AfterViewInit{

  dataSource: ProductCategory[] = []
  displayedColumns: string[] = ['Name', 'Image', 'Edit'];
  count = 0
  constructor(private apiService: ApiService<Array<ProductCategory>>) {
  }
  ngOnInit(): void {
    this.apiService.apiGet('ProductCategories').subscribe((res) => {
      let response: any = JSON.stringify(res)
      this.dataSource = JSON.parse(response)
      this.count = this.dataSource.length
    })
  }

  ngAfterViewInit() { 
    // let result = confirm("<i>Are you sure?</i>", "Confirm changes");
    // result.then((dialogResult) => {
    //     alert(dialogResult ? "Confirmed" : "Canceled");
    // });
}

  viewProductCat(eventData: any) {
    var id = eventData.key
    // this.router.navigate(['product'], { queryParams: { id: id } })
  }
}
