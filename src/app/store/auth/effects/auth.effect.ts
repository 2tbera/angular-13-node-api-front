import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap, } from 'rxjs/operators';
import { Me } from 'src/app/core/models/me.model';
import {
  getAuthorisedFailed,
  getAuthorisedSuccess,
  getAuthorised,
  getRegistered,
  getRegisteredSuccess
} from '../actions/auth.action';
import { getMyData } from "../../my-info/actions/my-info.action";
import { AuthHttpService } from "../services/authHttp";

@Injectable()
export class AuthEffect {

  private auth$ = createEffect(() =>
    this.actions$.pipe(ofType(getAuthorised as any),
      switchMap((content: Me) => this.authHttpService.getAuthorised(content)),
      tap((content: { id: number | boolean }) => typeof content.id === 'boolean' || this.store.dispatch(getMyData(content))),
      map((content: { id: number | boolean }) => typeof content.id === 'boolean' ? getAuthorisedFailed() : getAuthorisedSuccess()),
    ));


  private register$ = createEffect(() =>
    this.actions$.pipe(ofType(getRegistered as any),
      switchMap((content: Me) => this.authHttpService.getRegistered(content)),
      tap((data: { id: number }) => this.store.dispatch(getMyData(data))),
      map((content: Me) => getRegisteredSuccess()),
    ));

  constructor(private actions$: Actions, private store: Store, private authHttpService: AuthHttpService) {
  }
}
