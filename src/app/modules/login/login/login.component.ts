import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import * as AuthActions from '@store/authentication/auth.actions';
import { selectErrorMsg } from '@store/authentication/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validation = true;
  email = '';
  password = '';

  getState$: Observable<string | null>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) {
    this.getState$ = this.store.select(selectErrorMsg);
  }

  ngOnInit(): void {
    this.getState$.subscribe(err => {
      this.errorMessage = err;
    });
  }

  login(): void {
    const credentials = {
      login: this.email,
      password: this.password,
    };
    this.store.dispatch(AuthActions.login({ credentials }));
  }
}
