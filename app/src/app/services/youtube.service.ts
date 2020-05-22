import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { RespestaYoutube, Video } from '../models/youtube.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private videos: Video[] = [];

  constructor(private http: HttpClient) { }

  getVideos(){
    const url = `${ environment.urlYoutube }/playlistItems`;

    const params = new HttpParams()
          .set('key', environment.keyYoutube)
          .set('playlistId', environment.playlistId)
          .set('part', 'snippet')
          .set('maxResults', '9');

    return this.http.get<RespestaYoutube>(url, { params }).pipe(
            map( resp => { return resp.items;
            }),
            map(items => items.map( video => video.snippet ) )
          );
  }
}
