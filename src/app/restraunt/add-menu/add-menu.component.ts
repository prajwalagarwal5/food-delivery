import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  registeredUser:any = [];
  menus:any = [];
  public newItem: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('loggedInAdmin'));
    this.menus=this.registeredUser.itemList;
    this.inititaliseForm();
  }

  inititaliseForm() {
    this.newItem = this.fb.group({
      itemName:new FormControl('',Validators.required),
      qty:new FormControl('',Validators.required),
      rate:new FormControl('',Validators.required)
    })
  }

  saveItem(){
    this.menus.push(this.newItem.value);
    localStorage.setItem('loggedInAdmin',JSON.stringify(this.registeredUser));
    let arr:any=[];
    arr=JSON.parse(localStorage.getItem('restrauntDetails'));
    arr[this.registeredUser.id-1].itemList=this.menus;
    localStorage.setItem('restrauntDetails',JSON.stringify(arr));

  }

}
