import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Me } from "../../../core/models/me.model";
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MyInfoHttpService {

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  public getMyData(): Observable<Me> {
    return this.http.get('http://localhost:3000/user/user-data')
  }

}

