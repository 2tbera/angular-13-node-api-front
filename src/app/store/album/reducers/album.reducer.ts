import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createAlbumSuccess } from "../actions/album.action";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface State extends EntityState<any> {
}

export const adapter: EntityAdapter<any> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({});

const albumReducer = createReducer(initialState,
	on(createAlbumSuccess,
		(state, action) => {
			return adapter.setOne(action, state);
		}),
);

export function reducerAlbum (state: State | undefined, action: Action) {
	return albumReducer(state, action);
}

const reducerResponsibleState = createFeatureSelector<any>('album');

export const selectAlbums = (role: string) =>
	createSelector(reducerResponsibleState, (state) => {
		if (!state) {
			return;
		}

		return state;
	});
