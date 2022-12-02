import {createAction, props} from '@ngrx/store';
import { album } from "../../../core/models/album.model";

export enum AlbumActionsTypes {
  createAlbum = '[ALBUM] create Album',
  createAlbumSuccess = '[ALBUM] create Album Success',
  removeAlbum = '[ALBUM] remove Album',
  removeAlbumSuccess = '[ALBUM] remove Album Success',
  getMeAlbum = '[ALBUM] get me Album',
  getMeAlbumSuccess = '[ALBUM] get me Album Success',
  getAlbumMusic = '[ALBUM] get Album Music',
  getAlbumMusicSuccess = '[ALBUM] get Album Music Success',
  getAlbum = '[ALBUM] get Album',
  getAlbumSuccess = '[ALBUM] get Album Success',

}

export const createAlbum = createAction(AlbumActionsTypes.createAlbum, props<{name: string}>());
export const createAlbumSuccess = createAction(AlbumActionsTypes.createAlbumSuccess, props<{album: album}>());
export const removeAlbum = createAction(AlbumActionsTypes.removeAlbum, props<{id: string}>());
export const removeAlbumSuccess = createAction(AlbumActionsTypes.removeAlbumSuccess, props);
export const getMeAlbum = createAction(AlbumActionsTypes.getMeAlbum, props<{id: string}>());
export const getMeAlbumSuccess = createAction(AlbumActionsTypes.getMeAlbumSuccess, props<{ albums: album[] }>());
export const getAlbumMusic = createAction(AlbumActionsTypes.getAlbumMusic, props<{id: string}>());
export const getAlbumMusicSuccess = createAction(AlbumActionsTypes.getAlbumMusicSuccess, props<{ list: any[] }>());
export const getAlbum = createAction(AlbumActionsTypes.getAlbum, props<{id: string}>());
export const getAlbumSuccess = createAction(AlbumActionsTypes.getAlbumSuccess, props<{ albums: album[] }>());
