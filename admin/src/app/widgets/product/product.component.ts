import { Directionality } from '@angular/cdk/bidi';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/DTOs/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = {} as Product;
  detailsControl = ''


  constructor(private apiService: ApiService<Product>, @Inject(MAT_DIALOG_DATA) public data: Product, public dialogRef: MatDialogRef<ProductComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.apiService.apiGet<Product>('Products/byId/' + this.data.Id).subscribe(prod => {
      this.detailsControl = prod.Details
      this.product = prod
    })
  }

  update(prod: Product) {
    this.apiService.apiPut<Product>('Products/Update', prod).subscribe(res => {
      this.product = res;
      this._snackBar.open(`${res.Name} updated`, '', { duration: 1000, panelClass: 'success-snack-global', })
    })
  }

}
