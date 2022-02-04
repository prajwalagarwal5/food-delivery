import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SignupAsRestrauntComponent } from './signup-as-restraunt/signup-as-restraunt.component';
import { SignupAsCustomerComponent } from './signup-as-customer/signup-as-customer.component';
import { SigninAsCustomerComponent } from './signin-as-customer/signin-as-customer.component';
import { SigninAsRestrauntComponent } from './signin-as-restraunt/signin-as-restraunt.component';

@NgModule({
  declarations: [LoginComponent, SignupAsRestrauntComponent, SignupAsCustomerComponent, SigninAsCustomerComponent, SigninAsRestrauntComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class LoginModule { }
