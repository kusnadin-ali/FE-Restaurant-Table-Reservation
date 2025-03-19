import { MessageService } from 'primeng/api';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private cookieService: CookieService, private MessageService: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirect ke landing page jika Unauthorized
          this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'Unauthorized or Token Expired', life: 5000 });
          this.cookieService.delete('auth_token');
          this.cookieService.delete('user_type');
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
