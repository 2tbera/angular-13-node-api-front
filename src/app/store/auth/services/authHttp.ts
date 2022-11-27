import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Me } from "../../../core/models/me.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthHttpService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public getAuthorised(me: Me): Observable<any> {
    return  this.http.post('http://localhost:8081/auth/login', me)
  }

  public getRegistered(me: Me): Observable<any> {
    return  this.http.post('http://localhost:8081/auth/registration', me)
  }

}

