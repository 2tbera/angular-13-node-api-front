import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import {
  clearUploadMusic,
  uploadMusic, uploadMusicSuccess
} from '../actions/music.action';
import { createMusic } from "../actions/music.action";
import { MusicHttpService } from '../services/musicHttp';
import { alertSuccess, AlertTypes } from "../../../modules/alert";
import { uploadMusicFile } from "../../../core/models/music.model";
import { getAlbumMusic } from '../../album/actions/album.action';

@Injectable()
export class MusicEffect {

  private createMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMusic),
      switchMap((data: { id: string, result: { name: string, category: string, file: string } }) => this.musicHttpService.createMusic(data)),
      tap((data) =>  this.store.dispatch(alertSuccess({alertType: AlertTypes.Success , delay: 7000, message: 'Music is added'}))),
      tap((data) => {this.store.dispatch(getAlbumMusic({id: data.album_id}))}),
      map((data) => clearUploadMusic()),
    ));

  private uploadMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadMusic),
      switchMap((file: {file: any}) => this.musicHttpService.uploadMusic(file)),
      map((data: uploadMusicFile) => uploadMusicSuccess({music: data})),
      tap((me) =>  this.store.dispatch(alertSuccess({alertType: AlertTypes.Success , delay: 7000, message: 'Music is added'}))),
    ));

  constructor(private actions$: Actions, private store: Store, private musicHttpService: MusicHttpService) {
  }
}
