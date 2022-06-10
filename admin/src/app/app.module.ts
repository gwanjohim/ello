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
import { ProductComponent } from './widgets/product/product.component';
import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { OrdersNotificationComponent } from './widgets/orders-notification/orders-notification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { OrderDetailsComponent } from './widgets/order-details/order-details.component';
import { HomeComponent } from './widgets/home/home.component';

import { HttpClientJsonpModule } from '@angular/common/http'; //used by angular/google maps



@NgModule({
  declarations: [
    AppComponent,
    OrderStatusTransformerPipe,
    OrderPaymentOptionTransformerPipe,
    OrderPaymentStatusTransformerPipe,
    OrdersComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    ProductComponent,
    PageNotFoundComponent,
    OrdersNotificationComponent,
    OrderDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
