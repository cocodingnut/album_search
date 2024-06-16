
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usernameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usernameForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]]
    });
  }

  get usernameControl() {
    return this.usernameForm.get('username');
  }

  onSubmit() {
    if (this.usernameForm.valid) {
      const username = this.usernameForm.value.username;
      // Handle the valid username here
      console.log('Valid username:', username);
    } else {
      // Mark all controls as touched to trigger validation messages
      console.error('Invalid username');
      this.usernameForm.markAllAsTouched();
    }
  }
}
