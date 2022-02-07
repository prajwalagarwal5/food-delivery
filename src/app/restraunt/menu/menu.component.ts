import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  registeredUser:any = [];
  menus=[]

  constructor() { }

  /**
  * Gets loggedInAdmin data during initialization of component
  */
  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInAdmin'));
    this.menus=this.registeredUser.itemList;
  }

  /**
  * Remove item from menu list
  */
  removeItem(index){
    this.menus.splice(index,1);
    localStorage.setItem('loggedInAdmin',JSON.stringify(this.registeredUser));
    let arr:any=[];
    arr=JSON.parse(localStorage.getItem('restrauntDetails'));
    arr[this.registeredUser.id-1].itemList=this.menus;
    localStorage.setItem('restrauntDetails',JSON.stringify(arr));

  }

}
