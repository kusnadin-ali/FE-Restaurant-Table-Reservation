import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { ResponseApi } from '../../../general/type/response-api.type';
import { API_URLS } from '../../../general/constants/api-urls.const';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ListUserService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  retrieveUsersRestaurant(
    pages: number,
    size: number
  ): Observable<ResponseApi> {
    const token = this.cookieService.get('auth_token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get<ResponseApi>(
      `${API_URLS.USER.RERSTAURANT}?page=${pages}&size=${size}`,
      { headers }
    );
  }

  retrieveUsersCustomer(pages: number, size: number): Observable<ResponseApi> {
    const token = this.cookieService.get('auth_token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get<ResponseApi>(
      `${API_URLS.USER.CUSTOMER}?page=${pages}&size=${size}`,
      { headers }
    );
  }
}
