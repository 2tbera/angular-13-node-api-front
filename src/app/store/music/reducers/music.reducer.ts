import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createAlbumSuccess, getMeAlbumSuccess } from "../actions/album.action";
import { album } from "../../../core/models/album.model";

const initialState: {meAlbums: album[] } = {meAlbums: []};

const musicReducer = createReducer(initialState,
  on(createAlbumSuccess, (state, action) => ({ ...state, meAlbums: [...state.meAlbums, action.album]})),
  on(getMeAlbumSuccess, (state, action) => ({ ...state, ...{meAlbums: action.albums}}))
);

export function reducerAlbum(state: any, action: Action) {
  return musicReducer(state, action);
}

const reducerResponsibleState = createFeatureSelector<any>('album');

export const selectAlbums = () =>
  createSelector(reducerResponsibleState, (state) => {
    if (!state) {
      return;
    }
    return state.meAlbums;
  });
