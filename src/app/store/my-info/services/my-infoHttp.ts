import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Me } from "../../../core/models/me.model";
import { Router } from '@angular/router';

@Injectable()
export class MyInfoHttpService {


  constructor(private cookieService: CookieService, private router: Router) { }

  public getMyData(content: {id: number | boolean}): Observable<Me> {


    const users = JSON.parse(this.cookieService.get('users') || '[]');
    const selectedUser: Me = users.find((item: Me) => item.id == content.id)

    this.cookieService.set('authStatus', 'true');
    this.router.navigate(['./'])
    return of(selectedUser)
  }

}

