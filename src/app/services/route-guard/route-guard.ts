import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class RouteGuard implements CanActivate {


  constructor(private route: ActivatedRoute,private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('access_token')) {
        return true;
    }

    sessionStorage.setItem('requested-link',state.url);
    // navigate to login page
    this._router.navigate(['./login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}