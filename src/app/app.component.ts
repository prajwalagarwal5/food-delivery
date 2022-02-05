import { Component, OnInit } from '@angular/core';
import *  as  data from './restraunt-details.json';
import *  as  customerData from './customerDetails.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    localStorage.setItem('restrauntDetails',JSON.stringify((data as any).default))
    localStorage.setItem('customerDetails',JSON.stringify((customerData as any).default))

  }
  title = 'food-delivery';
}
