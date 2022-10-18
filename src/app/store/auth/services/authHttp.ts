import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Me } from "../../../core/models/me.model";

@Injectable()
export class AuthHttpService {

  constructor(private cookieService: CookieService) { }

  // Sorry logic is super primitive

  public getAuthorised(me: Me): Observable<any> {
    const users = JSON.parse(this.cookieService.get('users') || '[]');
    const selectedUser = users.find((item: Me) => item.emailAddress == me.emailAddress)
    return of( {id: selectedUser ? selectedUser?.id : false  } )
  }

  public getRegistered(me: Me): Observable<{ id: number }> {
    const users = JSON.parse(this.cookieService.get('users') || '[]') ;
    users.push({id: users.length , ...me})
    this.cookieService.set('users', JSON.stringify(users));
    return of({id : users.length} )
  }

}

