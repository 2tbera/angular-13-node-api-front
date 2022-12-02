import {ActionReducerMap} from '@ngrx/store';
import { reducerMe } from './my-info/reducers/my-info.reducer';
import { reducerAlbum } from "./album/reducers/album.reducer";

export const REDUCERS: ActionReducerMap<any> = {
    me: reducerMe,
    album: reducerAlbum,
};

export interface State {
}
