import { API_URLS } from '../../general/constants/api-urls.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../general/type/response-api.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(data: any): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(API_URLS.AUTH.LOGIN, data);
  }
}
