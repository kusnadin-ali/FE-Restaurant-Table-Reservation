import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { loginSuccess } from './general/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restaurant-table-reservation';

  constructor(private cookieService: CookieService, private store: Store) {
    const token = this.cookieService.get('auth_token');
    const userType = this.cookieService.get('user_type');
    if (token) {
      this.store.dispatch(loginSuccess({ token , userType}));
    }
  }
}
