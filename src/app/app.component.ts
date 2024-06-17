import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchForm: FormGroup;
  results: any[] = [];
  private stopSearch$ = new Subject<void>();

  @ViewChild('artistNameInput') artistNameInput: ElementRef | undefined;
  isSearching: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.searchForm = this.fb.group({
      artistName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]]
    });
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const artistName = this.searchForm.value.artistName;
      this.userService.searchArtists(artistName)
        .subscribe(
          (response: any) => {
            this.results = response.results;
          },
          (error) => {
            console.error('Error fetching albums:', error);
          }
        );
    }
  }
}