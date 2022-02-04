import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninAsCustomerComponent } from './signin-as-customer/signin-as-customer.component';
import { SigninAsRestrauntComponent } from './signin-as-restraunt/signin-as-restraunt.component';
import { SignupAsCustomerComponent } from './signup-as-customer/signup-as-customer.component';
import { SignupAsRestrauntComponent } from './signup-as-restraunt/signup-as-restraunt.component';



const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: LoginComponent },
  { path: 'restraunt-signup', component: SignupAsRestrauntComponent },
  { path: 'restraunt-signin', component: SigninAsRestrauntComponent },
  { path: 'customer-signin', component: SigninAsCustomerComponent },
  { path: 'customer-signup', component: SignupAsCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
