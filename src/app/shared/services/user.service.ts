import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'https://itunes.apple.com/search';
//   private searchTerms = new Subject<string>();

//   constructor(private http: HttpClient) {
//     this.searchArtists().subscribe(); // Initialize the search observable
//   }

//   search(term: string): void {
//     this.searchTerms.next(term);
//   }

//   private searchArtists(): Observable<any[]> {
//     return this.searchTerms.pipe(
//       debounceTime(5000), // Wait for 5 seconds before emitting the last value
//       distinctUntilChanged(), // Ignore consecutive duplicates
//       switchMap(term =>
//         this.http.get<{ resultCount: number, results: any[] }>(`${this.apiUrl}?term=${encodeURIComponent(term)}&media=music&entity=album&attribute=artistTerm&limit=50`).pipe(
//           map(response => response.results)
//         )
//       )
//     );
//   }
// }