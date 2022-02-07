import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-restraunt-list',
  templateUrl: './restraunt-list.component.html',
  styleUrls: ['./restraunt-list.component.scss']
})
export class RestrauntListComponent implements OnInit {
  restrauntDetails: any=[];
  selectedRestraunt:any;
  menus:any=[];
  div1:boolean;
  div2:boolean;
  cart=[];
  temp:any=[]

  constructor(private snackBar: MatSnackBar) { }

  /**
  * Gets loggedInUser data during initialization of component
  */
  ngOnInit() {
    this.enableDiv1();
    this.restrauntDetails = JSON.parse(localStorage.getItem('restrauntDetails'));
  }

  /**
  * Select restraunt and move to menu view
  */
  orderNow(restraunt){
    this.selectedRestraunt=restraunt;
    this.menus=this.selectedRestraunt.itemList;
    for(var i=0;i<this.menus.length;i++){
      this.temp.push(0);
    }
    this.enableDiv2();
  }

  /**
  * View restraunt List wise
  */
  enableDiv1(){
    this.selectedRestraunt=null;
    this.menus=[];
    this.temp=[];
    this.cart=[];
    this.div1=true;
    this.div2=false;
  }

  /**
  * menu items list wise
  */
  enableDiv2(){
    this.div1=false;
    this.div2=true;
  }

  /**
  * reduce number of quantity
  */
  reduce(index){
    if(this.temp[index]>0){
      this.temp[index]-=1;
    }
  }

  /**
  * increase number of quantity
  */
  increase(index){
    this.temp[index]+=1;
  }

  /**
  * Add the selected item to cart and save it in localStorage of loggedInUser, restrauntDetails and customerDetails
  */
  addToCart(index){
    this.cart=[]
    let arr:any={};
    arr.servings=this.temp[index];
    arr.item=this.menus[index];
    arr.restrauntId=this.selectedRestraunt.id;
    let data=JSON.parse(localStorage.getItem('loggedInUser'));

    if(data && data.cart.length>0 && data.cart[0].restrauntId===arr.restrauntId){
      this.cart.push(arr);
      for(var i=0;i<data.cart.length;i++)
        this.cart.push(data.cart[i]);
      data.cart=this.cart;
      localStorage.setItem('loggedInUser',JSON.stringify(data));
    }
    else{
      this.cart.push(arr);
      data.cart=this.cart;
      localStorage.setItem('loggedInUser',JSON.stringify(data));
    }
    let customerDetails=JSON.parse(localStorage.getItem('customerDetails'));
    customerDetails[data.id-1].cart=this.cart;
    localStorage.setItem('customerDetails',JSON.stringify(customerDetails));
    this.openSnackBar('Added To Cart')
  }

  /**
  * Open snack bar when item added to cart
  */
  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = 'center';
    config.duration=1000;
    this.snackBar.open(message, '',config);
  }
}
