import {createAction, props} from '@ngrx/store';
import { Item } from "../../../core/models/item.model";

export enum listActionsTypes {
  getFileList = '[FILE_LIST] get File List',
  addFile = '[FILE_LIST] add File',
}

export const getFileList = createAction(listActionsTypes.getFileList);
export const addFile = createAction(listActionsTypes.addFile, props<{addNewFile: Item}>());

