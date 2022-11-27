import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createAlbumSuccess, getAlbumSuccess } from "../actions/album.action";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { album } from "../../../core/models/album.model";

export interface State extends EntityState<any> {
}

export const adapter: EntityAdapter<album[]> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({});

const albumReducer = createReducer(initialState,
  on(createAlbumSuccess,
    (state, action: any) => {
      return adapter.addOne(action.album, state);
    }),
  on(getAlbumSuccess,
    (state, action: any) => {
      return adapter.addMany(action.albums, state);
    }),

);

export function reducerAlbum(state: State | undefined, action: Action) {
  return albumReducer(state, action);
}

const reducerResponsibleState = createFeatureSelector<any>('album');

export const selectAlbums = () =>
  createSelector(reducerResponsibleState, (state) => {
    if (!state) {
      return;
    }
    return state.ids.map((id: string)=> ({...state.entities[id]}));
  });
