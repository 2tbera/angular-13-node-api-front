import {createAction, props} from '@ngrx/store';
import { Me } from 'src/app/core/models/me.model';

export enum MyInfoActionsTypes {
  getMyData = '[MY_INFO] get My Info',
  getMyDataSuccess = '[MY_INFO] get My Info Success',
}

export const getMyData = createAction(MyInfoActionsTypes.getMyData, props<{id: number | boolean}>());
export const getMyDataSuccess = createAction(MyInfoActionsTypes.getMyDataSuccess, props<{me: Me}>());

