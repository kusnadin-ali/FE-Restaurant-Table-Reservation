import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformServer } from '@angular/common';
import { LoadingService } from '../../general/utils/loading.service';

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
    private loadingService: LoadingService,
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  onSubmit() {
    if (this.formGroup.valid) {
      this.loadingService.loadingOn();
      this.loginService.postLogin(this.formGroup.value).subscribe({
        next: (res) => {
          if (res.code === '00') {
            this.cookieService.set('auth_token', res.result.token, { secure: true, sameSite: 'Strict' });
            this.cookieService.set('user_type', res.result.userType, { secure: true, sameSite: 'Strict' });
            this.router.navigateByUrl('/dashboard');
          }
          this.loadingService.loadingOff();
        },
        error: (err) => {
          console.log('Error Login',err);
          this.loadingService.loadingOff();
        }
      });
    }
  }
}
