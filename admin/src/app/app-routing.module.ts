import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoogleMapsDemoComponent } from './widgets/google-maps-demo/google-maps-demo.component';
import { HomeComponent } from './widgets/home/home.component';
import { OrderDeliveryComponent } from './widgets/order-delivery/order-delivery.component';
import { OrderDetailsComponent } from './widgets/order-details/order-details.component';
import { OrdersComponent } from './widgets/orders/orders.component';
import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';
import { ProductCategoriesComponent } from './widgets/product-categories/product-categories.component';
import { ProductComponent } from './widgets/product/product.component';
import { ProductsComponent } from './widgets/products/products.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-categories', component: ProductCategoriesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
