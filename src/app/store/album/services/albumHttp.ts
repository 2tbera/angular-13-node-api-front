import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { album } from "../../../core/models/album.model";

@Injectable()
export class AlbumHttpService {

  constructor(private http: HttpClient) { }

  public createAlbum(data: {name: string}): Observable<album> {
    return this.http.post('http://localhost:3000/album/create', data) as Observable<album>
  }

  public getAlbum(id: string): Observable<album[]> {
    return this.http.post('http://localhost:3000/album/getUserAlbums', {id}) as Observable<album[]>
  }

}

