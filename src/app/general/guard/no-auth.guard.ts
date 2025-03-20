import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): Observable<boolean> {
    const storedToken = this.cookieService.get('auth_token');
    if (storedToken) {
      this.router.navigate(['/dashboard']);
      return of(false);
    }

    return of(true);
  }
}
