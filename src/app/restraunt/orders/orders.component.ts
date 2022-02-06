import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  registeredUser:any = [];
  orders=[];
  
  constructor() { }

  /**
  * Gets loggedInAdmin data during initialization of component
  */
  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInAdmin'));
    this.orders=this.registeredUser.orders;
    console.log(this.orders);
  }

  /**
  * return amount for the particular order
  */
  getAmount(i){
    var totalAmount=0;
    for(var j=0;j<this.orders[i].menu.length;j++){
      totalAmount+=this.orders[i].menu[j].rate*this.orders[i].menu[j].servings;
    }
    return totalAmount;
  }


}
