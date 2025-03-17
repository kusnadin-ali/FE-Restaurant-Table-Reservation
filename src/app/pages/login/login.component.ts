import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../general/store/auth/auth.actions';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private store: Store,
    private router: Router,
    private cookieService: CookieService
  ) {}

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.loginService.postLogin(this.formGroup.value).subscribe({
        next: (res) => {
          if (res.code === '00') {
            this.store.dispatch(loginSuccess({ token: res.result.token, userType: res.result.userType }));
            this.cookieService.set('auth_token', res.result.token, { secure: true, sameSite: 'Strict' });
            this.cookieService.set('user_type', res.result.userType, { secure: true, sameSite: 'Strict' });
            this.router.navigateByUrl('/dashboard');
          }
        },
      });
    }
  }
}
