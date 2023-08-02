import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  email = '';
  password = '';

  getError$: Observable<string | null>;
  errorMessage: string | null;

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get hasEmailError() {
    const element = this.loginForm.get('email');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  get hasPasswordError() {
    const element = this.loginForm.get('password');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.getError$ = this.store.select(selectErrorMsg);
  }

  ngOnInit(): void {
    this.getError$.subscribe(err => {
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

  invalid(property: string): boolean | undefined {
    const element = this.loginForm.get(property);
    return element?.invalid && (element?.dirty || element?.touched);
  }
}
