import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map,  } from 'rxjs/operators';
import { createAlbum, createAlbumSuccess } from '../actions/album.action';
import { AlbumHttpService } from "../services/albumHttp";
import { album } from "../../../core/models/album.model";

@Injectable()
export class AlbumEffect {

  private album$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAlbum),
      switchMap((data: {name: string}) => this.albumHttpService.createAlbum(data)),
      map((data: album) => createAlbumSuccess(data)),
  ));

  constructor(private actions$: Actions,private store: Store,  private albumHttpService: AlbumHttpService) {
  }
}
