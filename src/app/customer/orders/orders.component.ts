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

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.orders=this.registeredUser.orders;
    console.log(this.orders);
  }
  getAmount(i){
    var totalAmount=0;
    for(var j=0;j<this.orders[i].length;j++){
      totalAmount+=this.orders[i][j].item.rate*this.orders[i][j].servings;
    }
    return totalAmount;
  }

  getRestrauntName(restrauntId){
    let name="";
      let arr1 = JSON.parse(localStorage.getItem('restrauntDetails')); 
      name=arr1[restrauntId-1].name;
    return name;
  }
}