import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  seconds :number;

  constructor(private router:Router) { }

  ngOnInit() {
    this.seconds=5;
  }

  /**
  * Redirects to orders page
  */
  redirectInSecond() {
    var _this = this;
    setInterval(function () {
        _this.seconds--;
      if (_this.seconds == 0) {
        _this.router.navigateByUrl('customer/orders')
      }
    }, 1000);
  }
  
  close() {
    this.router.navigateByUrl('customer/orders');
  }
}
