import {createAction, props} from '@ngrx/store';
import { music, uploadMusicFile } from "../../../core/models/music.model";

export enum MusicActionsTypes {
  createMusic = '[MUSIC] create Music',
  createMusicSuccess = '[MUSIC] create Music Success',
  uploadMusic = '[MUSIC] upload Music',
  uploadMusicSuccess = '[MUSIC] upload Music Success',
  clearUploadMusic = '[MUSIC] clear Upload Music',
}

export const createMusic = createAction(MusicActionsTypes.createMusic, props<{id: string, result: { name: string, category: string, file: string }}>());
export const createMusicSuccess = createAction(MusicActionsTypes.createMusicSuccess, props);

export const uploadMusic = createAction(MusicActionsTypes.uploadMusic, props<{file: any}>());
export const uploadMusicSuccess = createAction(MusicActionsTypes.uploadMusicSuccess, props<{music: uploadMusicFile}>());

export const clearUploadMusic = createAction(MusicActionsTypes.clearUploadMusic, props);
