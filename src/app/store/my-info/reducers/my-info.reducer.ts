import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Me } from 'src/app/core/models/me.model';
import { getMyDataSuccess } from '../actions/my-info.action';

const initialState: Me = {};

const meReducer = createReducer(initialState,
	on(getMyDataSuccess, (state, action) => ({
		...state,
		...action.me
	})
	)
);

export function reducerMe(state: any, action: Action) {
	return meReducer(state, action);
}


const meState = createFeatureSelector<Me>('me');

export const selectMeInfo = (fields?: string[]) => createSelector(
	meState,
	(state) => {
		// if (!state || !state.id) {
		// 	return;
		// }
		let data = {}
		// if(fields && fields.length) {
		// 	fields.forEach(item => {
		// 		data[item] = state[item];
		// 	})
		// } else {
			data = state
		// }
	
		return data;
	}
);


