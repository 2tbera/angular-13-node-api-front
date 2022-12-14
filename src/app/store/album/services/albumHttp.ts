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

  public removeAlbum(id: {id: string}): Observable<album> {
    return this.http.delete('http://localhost:3000/album/remove', {body: id}) as Observable<album>
  }

  public getMeAlbum(id: string): Observable<album[]> {
    return this.http.post('http://localhost:3000/album/getUserAlbums', {id}) as Observable<album[]>
  }

  public getAlbumMusic(id: string): Observable<album[]> {
    return this.http.get(`http://localhost:3000/album/getById/${id}`) as Observable<album[]>
  }
  
  public getAlbum(id: string): Observable<album[]> {
    return this.http.post('http://localhost:3000/album/getUserAlbums', {id}) as Observable<album[]>
  }

}

