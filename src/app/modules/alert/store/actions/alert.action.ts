import {createAction, props} from '@ngrx/store';
import {AlertModel} from '../models/alert.model';

export enum AlertActionsTypes {
  Info = '[ALERT] info',
  Success = '[ALERT] success',
  Warning = '[ALERT] warning',
  Danger = '[ALERT] danger',
}

export const alertInit = createAction(AlertActionsTypes.Info, props<AlertModel>());
export const alertSuccess = createAction(AlertActionsTypes.Success, props<AlertModel>());
export const alertWarning = createAction(AlertActionsTypes.Warning, props<AlertModel>());
export const alertDanger = createAction(AlertActionsTypes.Danger, props<AlertModel>());

