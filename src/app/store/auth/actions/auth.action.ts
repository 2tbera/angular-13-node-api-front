import {createAction, props} from '@ngrx/store';
import { Me } from 'src/app/core/models/me.model';

export enum AuthActionsTypes {
  getAuthorised = '[AUTH] get My Authorised',
  getAuthorisedSuccess = '[AUTH] get My Authorised Success',
  getAuthorisedFailed = '[AUTH] get My Authorised Failed',

  getRegistered = '[AUTH] get My Registered',
  getRegisteredSuccess = '[AUTH] get My Registered Success',
  getRegisteredFailed = '[AUTH] get My Registered Failed',
}

export const getAuthorised = createAction(AuthActionsTypes.getAuthorised, props<{me: Me}>());
export const getAuthorisedSuccess = createAction(AuthActionsTypes.getAuthorisedSuccess);
export const getAuthorisedFailed = createAction(AuthActionsTypes.getAuthorisedFailed);

export const getRegistered = createAction(AuthActionsTypes.getRegistered, props<{me: Me}>());
export const getRegisteredSuccess = createAction(AuthActionsTypes.getRegisteredSuccess);
export const getRegisteredFailed = createAction(AuthActionsTypes.getRegisteredFailed);
