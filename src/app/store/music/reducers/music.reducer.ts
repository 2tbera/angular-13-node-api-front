import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { album } from "../../../core/models/album.model";

const initialState: {meAlbums: album[], albumMusic: any } = {meAlbums: [], albumMusic: {}};

// const musicReducer = createReducer(initialState,
//   on(createAlbumSuccess, (state, action) => ({ ...state, meAlbums: [...state.meAlbums, action.album]})),
//   on(getMeAlbumSuccess, (state, action) => ({ ...state, ...{meAlbums: action.albums}})),
//   on(getAlbumMusicSuccess, (state, action) => ({ ...state, ...{...state.albumMusic, albumMusic:  action.list }}))
// );

// export function reducerAlbum(state: any, action: Action) {
  // return musicReducer(state, action);
// }

const reducerResponsibleState = createFeatureSelector<any>('album');

export const selectAlbums = () =>
  createSelector(reducerResponsibleState, (state) => {
    if (!state) {
      return;
    }
    return state.meAlbums;
  });


export const selectAlbumsMusic = () =>
  createSelector(reducerResponsibleState, (state) => {
    if (!state || !state.albumMusic.length) {
      return;
    }
    return state.albumMusic;
  });
