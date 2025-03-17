import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private store: Store<{ auth: AuthState }>, private router: Router, private cookieService: CookieService) {}

  canActivate(): Observable<boolean> {
    return this.store.select((state) => state.auth?.token).pipe(
      map((token) => {
        if (token) {
          this.router.navigate(['/dashboard']);
          return false;
        }

        const storedToken = this.cookieService.get('auth_token');
        if (storedToken) {
          this.router.navigate(['/dashboard']);
          return false;
        }

        return true;
      })
    );
  }
}
