import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject, tap, throttleTime } from 'rxjs';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;
  results: any[] = [];
  artistName = new FormControl('');
  countdown = 0;
  searchName: string = '';

  private searchSubject = new Subject<string>();

  constructor(private albumService: AlbumService) {
    this.searchSubject.pipe(
      throttleTime(5000) // 设置5秒的节流时间
    ).subscribe(artistName => {
      this.countdown = 5;
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
      this.searchName = artistName;
      this.search(this.searchName);

    });
  }

  private search(artistName: string) {
    this.albumService.searchArtists(artistName)
      .pipe(
        tap({
          next: (response: any) => {
            this.count = response.resultCount;
            this.results = response.results;
          },
          error: (error) => {
            console.error('Error fetching albums:', error);
          }
        })
      ).subscribe();
  }


  onKeyUp(event: KeyboardEvent) {
    const artistName = this.artistName.value;
    if (event.key === 'Enter' && artistName !== null) {
      this.searchSubject.next(artistName);
    }
  }
}