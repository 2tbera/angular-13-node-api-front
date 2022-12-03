export interface music {
  id?: string;
  name: string;
  user_id?: string;
  file: string;
  category: string;
}

export interface uploadMusicFile {
    id?: string;
    filename?: string
}

export interface createMusicConnection {
  id: string;
  album_id: string;
  music_id: string;
}

