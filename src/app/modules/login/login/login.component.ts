import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import * as AuthActions from '@store/authentication/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validation = true;
  email = '';
  password = '';

  constructor(private store: Store<AppState>) {}

  login(): void {
    const credentials = {
      login: this.email,
      password: this.password,
    };
    this.store.dispatch(AuthActions.login({ credentials }));
  }
}
