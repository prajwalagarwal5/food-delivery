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

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInAdmin'));
    this.menus=this.registeredUser.itemList;
    console.log(this.menus)
  }

  removeItem(index){
    this.menus.splice(index,1);
    console.log(this.registeredUser)
    console.log(this.menus)
    localStorage.setItem('loggedInAdmin',JSON.stringify(this.registeredUser));
    let arr:any=[];
    arr=JSON.parse(localStorage.getItem('restrauntDetails'));
    arr[this.registeredUser.id-1].itemList=this.menus;
    localStorage.setItem('restrauntDetails',JSON.stringify(arr));

  }

}
