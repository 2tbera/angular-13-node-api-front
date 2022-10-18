import {ActionReducerMap} from '@ngrx/store';
import { reducerMe } from './my-info/reducers/my-info.reducer';
import { reducerList } from "./list/reducers/list.reducer";

export const REDUCERS: ActionReducerMap<any> = {
    me: reducerMe,
    list: reducerList
};

export interface State {
}