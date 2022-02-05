import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RestrauntRoutingModule } from './restraunt-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';



@NgModule({
  declarations: [HomeComponent, OrdersComponent, MenuComponent, AddMenuComponent],
  imports: [
    CommonModule,
    RestrauntRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RestrauntModule { }
