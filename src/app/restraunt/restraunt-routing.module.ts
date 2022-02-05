import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'orders', component: OrdersComponent  },
  { path: 'menu', component: MenuComponent  },
  { path: 'add-menu', component: AddMenuComponent  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrauntRoutingModule { }
