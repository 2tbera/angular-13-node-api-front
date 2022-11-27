import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap, } from 'rxjs/operators';
import { Me } from 'src/app/core/models/me.model';
import {
  getAuthorisedSuccess,
  getAuthorised,
  getRegistered,
  getRegisteredSuccess
} from '../actions/auth.action';
import { AuthHttpService } from "../services/authHttp";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {

  private auth$ = createEffect(() =>
    this.actions$.pipe(ofType(getAuthorised as any),
      switchMap((content: Me) => this.authHttpService.getAuthorised(content)),
      tap((content:  {accessToken: string, refreshToken: string}) => {
        this.cookieService.set('accessToken', content.accessToken);
        this.cookieService.set('refreshToken', content.refreshToken);
        this.router.navigate(['./'])
      }),
      map(() =>  getAuthorisedSuccess()),
    ));


  private register$ = createEffect(() =>
    this.actions$.pipe(ofType(getRegistered as any),
      switchMap((content: Me) => this.authHttpService.getRegistered(content)),
      tap((content:  {accessToken: string, refreshToken: string}) => {
        this.cookieService.set('accessToken', content.accessToken);
        this.cookieService.set('refreshToken', content.refreshToken);
        this.router.navigate(['./'])
      }),
      map(() => getRegisteredSuccess()),
    ));

  constructor(private actions$: Actions,
              private store: Store,
              private authHttpService: AuthHttpService,
              private cookieService: CookieService,
              private router: Router) {
  }
}
