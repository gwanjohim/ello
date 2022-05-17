import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderStatusTransformerPipe } from './pipes/order-status-transformer/order-status-transformer.pipe';
import { OrderPaymentOptionTransformerPipe } from './pipes/order-payment-option-transformer/order-payment-option-transformer.pipe';
import { OrderPaymentStatusTransformerPipe } from './pipes/order-payment-status-transformer/order-payment-status-transformer.pipe';
import { OrdersComponent } from './widgets/orders/orders.component';
import { ProductCategoriesComponent } from './widgets/product-categories/product-categories.component';
import { ProductsComponent } from './widgets/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusTransformerPipe,
    OrderPaymentOptionTransformerPipe,
    OrderPaymentStatusTransformerPipe,
    OrdersComponent,
    ProductCategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
