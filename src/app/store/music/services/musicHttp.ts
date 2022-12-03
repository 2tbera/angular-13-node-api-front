import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { createMusicConnection, music, uploadMusicFile } from "../../../core/models/music.model";

@Injectable()
export class MusicHttpService {

  constructor(private http: HttpClient) { }

  public createMusic(data: {id: string, result: { name: string, category: string, file: string }}): Observable<createMusicConnection> {
    return this.http.post(`http://localhost:3000/album/addMusic/${data.id}`, data.result) as Observable<createMusicConnection>
  }

  public uploadMusic(data: {file: any}): Observable<uploadMusicFile> {
    const formData: any = new FormData();
    formData.append('file', data.file);
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.post(`http://localhost:3000/file/upload`, formData, {
      headers,
    }) as Observable<uploadMusicFile>
  }

}

