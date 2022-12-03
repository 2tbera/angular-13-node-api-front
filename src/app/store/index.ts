import {ActionReducerMap} from '@ngrx/store';
import { reducerMe } from './my-info/reducers/my-info.reducer';
import { reducerAlbum } from "./album/reducers/album.reducer";
import { reducerMusic } from "./music/reducers/music.reducer";

export const REDUCERS: ActionReducerMap<any> = {
    me: reducerMe,
    album: reducerAlbum,
    music: reducerMusic,
};

export interface State {
}
