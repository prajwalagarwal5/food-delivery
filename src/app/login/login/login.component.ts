import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signUpRestraunt(){
    this.router.navigateByUrl("login/restraunt-signup");
  }
  signInRestraunt(){
    this.router.navigateByUrl("login/restraunt-signin");
  }
  signUpCustomer(){
    this.router.navigateByUrl("login/customer-signup");
  }
  signInCustomer(){
    this.router.navigateByUrl("login/customer-signin");
  }

}
