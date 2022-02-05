import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class RouteGuardForUser implements CanActivate {


  constructor(private route: ActivatedRoute,private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('loggedInUser')) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['./login']);
    return false;
  }

}