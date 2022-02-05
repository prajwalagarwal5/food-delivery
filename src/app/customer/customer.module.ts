import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestrauntListComponent } from './restraunt-list/restraunt-list.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, CartComponent, CheckoutComponent, RestrauntListComponent, OrdersComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CustomerModule { }
