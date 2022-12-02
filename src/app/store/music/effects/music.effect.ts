import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import {
  createMusicSuccess,
  uploadMusic, uploadMusicSuccess
} from '../actions/music.action';
import { album } from "../../../core/models/album.model";
import { createMusic } from "../actions/music.action";
import { MusicHttpService } from '../services/musicHttp';
import { createAlbumSuccess } from "../../album/actions/album.action";
import { alertSuccess, AlertTypes } from "../../../modules/alert";
import { music } from "../../../core/models/music.model";

@Injectable()
export class MusicEffect {

  private createMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMusic),
      switchMap((data: { id: string, result: { name: string, category: string, file: string } }) => this.musicHttpService.createMusic(data)),
      tap((me) =>  this.store.dispatch(alertSuccess({alertType: AlertTypes.Success , delay: 7000, message: 'Music is added'}))),
      map((data) => createMusicSuccess()),
    ));

  private uploadMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadMusic),
      switchMap((file: {file: any}) => this.musicHttpService.uploadMusic(file)),
      map((data: music) => uploadMusicSuccess({music: data})),
      tap((me) =>  this.store.dispatch(alertSuccess({alertType: AlertTypes.Success , delay: 7000, message: 'Music is added'}))),
    ));

  constructor(private actions$: Actions, private store: Store, private musicHttpService: MusicHttpService) {
  }
}
