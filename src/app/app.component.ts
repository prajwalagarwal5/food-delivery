import { Component, OnInit } from '@angular/core';
import *  as  data from './restraunt-details.json';
import *  as  customerData from './customerDetails.json';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeaderForAdmin: boolean = false;
  showHeaderForUser: boolean = false;
  title = 'food-delivery';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('restrauntDetails')==null || localStorage.getItem('restrauntDetails')==undefined){
      localStorage.setItem('restrauntDetails', JSON.stringify((data as any).default))
    }
    if(localStorage.getItem('customerDetails')==null || localStorage.getItem('customerDetails')==undefined){
      localStorage.setItem('customerDetails', JSON.stringify((customerData as any).default))
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeaderForAdmin = this.activatedRoute.firstChild.snapshot.data.showHeaderForAdmin !== false;
        this.showHeaderForUser = this.activatedRoute.firstChild.snapshot.data.showHeaderForUser !== false;
      }
    });

  }
  logOut(){
    localStorage.removeItem('loggedInAdmin')
    localStorage.removeItem('loggedInUser')
    this.router.navigateByUrl('login')
  }

}
