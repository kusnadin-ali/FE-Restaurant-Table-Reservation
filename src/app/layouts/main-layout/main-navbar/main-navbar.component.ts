import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { logout } from '../../../general/store/auth/auth.actions';

@Component({
  selector: 'app-main-navbar',
  imports: [SharedModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {

  constructor(private router: Router, private store: Store, private cookieService: CookieService) {}

  logout() {
    this.store.dispatch(logout());
    this.cookieService.delete('auth_token');
    this.cookieService.delete('user_type');
    this.router.navigateByUrl('/');
  }
}
