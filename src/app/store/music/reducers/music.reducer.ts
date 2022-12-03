import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { uploadMusicFile } from 'src/app/core/models/music.model';
import { uploadMusicSuccess, clearUploadMusic } from '../actions/music.action';

const initialState: {uploadedfile: uploadMusicFile } = {uploadedfile: {}};

const musicReducer = createReducer(initialState,
  on(uploadMusicSuccess, (state, action) => ({ ...state, uploadedfile: action.music})),
  on(clearUploadMusic, (state, action) => ({ ...state, uploadedfile: {}})),
);

export function reducerMusic(state: any, action: Action) {
  return musicReducer(state, action);
}

const reducerResponsibleState = createFeatureSelector<any>('music');

export const selectUploadedMusic = () =>
  createSelector(reducerResponsibleState, (state) => {
    if (!state) {
      return;
    }
    return state.uploadedfile;
  });


