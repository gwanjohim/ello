import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrdersComponent } from './widgets/orders/orders.component';
import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';
import { ProductCategoriesComponent } from './widgets/product-categories/product-categories.component';
import { ProductComponent } from './widgets/product/product.component';
import { ProductsComponent } from './widgets/products/products.component';

const routes: Routes = [

  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'product', component: ProductComponent },  // you must add your component here
  { path: 'products', component: ProductsComponent },  // you must add your component here
  { path: 'product-categories', component: ProductCategoriesComponent },  // you must add your component here
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
