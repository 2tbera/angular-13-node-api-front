import {createAction, props} from '@ngrx/store';
import { music } from "../../../core/models/music.model";

export enum MusicActionsTypes {
  createMusic = '[MUSIC] create Music',
  createMusicSuccess = '[MUSIC] create Music Success',
  removeMusic = '[MUSIC] remove Music',
  removeMusicSuccess = '[MUSIC] remove Music Success',
  getMeMusic = '[MUSIC] get me Music',
  getMeMusicSuccess = '[MUSIC] get me Music Success',
  getMusic = '[MUSIC] get Music',
  getMusicSuccess = '[MUSIC] get Music Success',

}

export const createAlbum = createAction(MusicActionsTypes.createMusic, props<{name: string}>());
export const createAlbumSuccess = createAction(MusicActionsTypes.createMusicSuccess, props<{music: music}>());

export const removeAlbum = createAction(MusicActionsTypes.removeMusic, props<{id: string}>());
export const removeAlbumSuccess = createAction(MusicActionsTypes.removeMusicSuccess, props);

export const getMeAlbum = createAction(MusicActionsTypes.getMeMusic, props<{id: string}>());
export const getMeAlbumSuccess = createAction(MusicActionsTypes.getMeMusicSuccess, props<{ album: music[] }>());
