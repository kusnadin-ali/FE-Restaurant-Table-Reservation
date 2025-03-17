import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthState } from "../store/auth/auth.state";
import { CookieService } from "ngx-cookie-service";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<{ auth: AuthState }>, private router: Router, private cookieService: CookieService) {}

  canActivate(): Observable<boolean> {
    return this.store.select((state) => state?.auth?.token).pipe(
      map((token) => {
        if (token) return true;

        // Cek token di Cookies jika Store kosong
        const storedToken = this.cookieService.get('auth_token');
        if (storedToken) return true;

        // Jika tidak ada token, arahkan ke landing page
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
