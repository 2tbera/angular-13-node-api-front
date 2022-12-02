import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import {
  createAlbum,
  createAlbumSuccess,
  getAlbumMusic, getAlbumMusicSuccess,
  getMeAlbum,
  getMeAlbumSuccess,
  removeAlbum,
  removeAlbumSuccess
} from '../actions/album.action';
import { AlbumHttpService } from "../services/albumHttp";
import { album } from "../../../core/models/album.model";

@Injectable()
export class AlbumEffect {

  private createAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAlbum),
      switchMap((data: { name: string }) => this.albumHttpService.createAlbum(data)),
      map((data: album) => createAlbumSuccess({album: data})),
    ));

  private removeAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeAlbum),
      switchMap((id: {id: string}) => this.albumHttpService.removeAlbum(id)),
      tap((me) => me.id && this.store.dispatch(getMeAlbum({id: me.id}))),
      map(() => removeAlbumSuccess()),
    ));

  private getMeAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMeAlbum),
      switchMap((data) => this.albumHttpService.getMeAlbum(data.id)),
      map((list: album[]) => getMeAlbumSuccess({albums: list})),
    ));

  private getAlbumMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAlbumMusic),
      switchMap((data) => this.albumHttpService.getAlbumMusic(data.id)),
      map((list: any[]) => getAlbumMusicSuccess({list: list})),
    ));

  constructor(private actions$: Actions, private store: Store, private albumHttpService: AlbumHttpService) {
  }
}
