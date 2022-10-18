import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Item } from 'src/app/core/models/item.model';
import { addFile } from '../actions/list.action';

const initialState: Item[] = [];

const listReducer = createReducer(initialState,
	on(addFile, (state, action) => ([
		...state,
		action.addNewFile
		])
	)
);

export function reducerList(state: any, action: Action) {
	return listReducer(state, action);
}

const listState = createFeatureSelector<Item[]>('list');

export const selectList = () => createSelector(
	listState,
	(state) => state
);


