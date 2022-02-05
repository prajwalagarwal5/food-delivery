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
    localStorage.setItem('restrauntDetails', JSON.stringify((data as any).default))
    localStorage.setItem('customerDetails', JSON.stringify((customerData as any).default))
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeaderForAdmin = this.activatedRoute.firstChild.snapshot.data.showHeaderForAdmin !== false;
        this.showHeaderForUser = this.activatedRoute.firstChild.snapshot.data.showHeaderForUser !== false;
      }
    });

  }
  logOut(){
    localStorage.removeItem('restrauntDetails')
    localStorage.removeItem('customertDetails')
    localStorage.removeItem('loggedInAdmin')
    localStorage.removeItem('loggedInUser')
    this.router.navigateByUrl('login')
  }

}
