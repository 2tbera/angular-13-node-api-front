import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import { Me } from 'src/app/core/models/me.model';
import { getMyData, getMyDataSuccess } from '../actions/my-info.action';
import { MyInfoHttpService } from '../services/my-infoHttp';

@Injectable()
export class MyDataEffect {

  private myData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMyData),
      switchMap(() => this.myInfoHttpService.getMyData()),
      map((content: Me) => getMyDataSuccess({me: content})),
  ));

  constructor(private actions$: Actions,private store: Store,  private myInfoHttpService: MyInfoHttpService) {
  }
}
