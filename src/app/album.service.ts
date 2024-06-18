import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // private apiUrl = 'https://itunes.apple.com/search';
  private apiUrl = '/api/search';

  constructor(private http: HttpClient) { }

  searchArtists(artistName: string): Observable<any> {
    const params = new HttpParams()
      .set('term', artistName)
      .set('media', 'music')
      .set('entity', 'album')
      .set('attribute', 'artistTerm')
      .set('limit', '50');

    return this.http.get<any>(this.apiUrl, { params });
  }
}

