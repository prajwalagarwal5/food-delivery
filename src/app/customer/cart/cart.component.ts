import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  registeredUser: any = [];
  items = [];
  restrauntName: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log(this.registeredUser);
    this.items = this.registeredUser.cart;
    if(this.items.length>0){
      let arr1 = JSON.parse(localStorage.getItem('restrauntDetails')); 
      this.restrauntName=arr1[this.items[0].restrauntId-1].name;
    }

  }

  getAmount() {
    var totalAmount = 0;
    for (var j = 0; j < this.items.length; j++) {
      totalAmount += this.items[j].servings * this.items[j].item.rate;
    }
    return totalAmount;
  }

  checkOut() {
    let arr1 = JSON.parse(localStorage.getItem('restrauntDetails'));
    let arr2 = JSON.parse(localStorage.getItem('customerDetails'));
    let menu = [];
    let orderId;

    if (arr1[this.registeredUser.cart[0].restrauntId - 1].orders.length == 0) {
      orderId = 100;
    }
    else {
      orderId = arr1[this.registeredUser.cart[0].restrauntId - 1].orders[arr1[this.registeredUser.cart[0].restrauntId - 1].orders.length - 1].orderId + 1;
    }
    for (var i = 0; i < this.items.length; i++) {
      let object: any = {};
      object.itemName = this.items[i].item.itemName;
      object.qty = this.items[i].item.qty;
      object.rate = this.items[i].item.rate;
      object.servings = this.items[i].servings;
      menu.push(object);
    }
    let list = {
      "orderId": orderId,
      "name": this.registeredUser.name,
      "menu": menu
    }
    console.log(list)
    arr2[this.registeredUser.id - 1].orders = this.items;
    arr2[this.registeredUser.id - 1].cart = [];
    localStorage.setItem('customerDetails', JSON.stringify(arr2));
    arr1[this.registeredUser.cart[0].restrauntId - 1].orders.push(list)
    localStorage.setItem('restrauntDetails', JSON.stringify(arr1));
    this.registeredUser.cart=[];
    this.registeredUser.orders.push(this.items);
    localStorage.setItem('loggedInUser', JSON.stringify(this.registeredUser));
    this.items=[];
    this.router.navigateByUrl('customer/order-success');
  }

  delete(index) {
    this.items.splice(index,1);
    this.registeredUser.cart=this.items;
    localStorage.setItem('loggedInUser', JSON.stringify(this.registeredUser));
    let customerDetails=JSON.parse(localStorage.getItem('customerDetails'));
    customerDetails[this.registeredUser.id-1].cart=this.items;
    localStorage.setItem('customerDetails',JSON.stringify(customerDetails));
  }
}
