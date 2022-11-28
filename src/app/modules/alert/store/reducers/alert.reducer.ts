import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {alertDanger, alertInit, alertSuccess, alertWarning} from '../actions/alert.action';
import {AlertModel} from '../models/alert.model';

const alertReducer = createReducer({},
  on(alertInit, (state, action) => ({...state, ...action})),
  on(alertSuccess, (state, action) => ({...state, ...action})),
  on(alertWarning, (state, action) => ({...state, ...action})),
  on(alertDanger, (state, action) => ({...state, ...action})),
);

export function reducerAlert(state: any, action: Action) {
  return alertReducer(state, action);
}

const alertState = createFeatureSelector<AlertModel>('alert');

export const AlertStateLast = createSelector(
  alertState,
  (state: AlertModel) => {
    if (!state) {
      return;
    }
    return state as AlertModel;
  }
);
