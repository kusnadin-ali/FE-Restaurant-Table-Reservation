import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthState } from "../store/auth/auth.state";
import { CookieService } from "ngx-cookie-service";
import { map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private cookieService: CookieService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const storedToken = this.cookieService.get('auth_token');
    if (storedToken) {
      return true
    }

    this.router.navigateByUrl('/');
    return false;
  }
}
