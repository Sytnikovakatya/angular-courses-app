import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject, tap } from 'rxjs';

import { Store } from '@ngrx/store';

import * as AuthActions from '@store/authentication/auth.actions';
import { AppState } from '@store/app.state';

import { User } from '@interfaces/user.interface';
import { Token } from '@interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/auth';

  private authentication: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticated$: Observable<boolean> = this.authentication.asObservable();

  constructor(private http: HttpClient, private router: Router, private store: Store<AppState>) {}

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get isAuthenticated(): Observable<boolean> {
    if (Boolean(this.token)) {
      this.authentication.next(true);
    } else {
      this.authentication.next(false);
    }
    return this.isAuthenticated$;
  }

  login(credentials: { login: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        this.store.dispatch(AuthActions.getUserInfo());
        this.router.navigate(['/courses']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUserInfo(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/userinfo', { token: localStorage.getItem('token') });
  }
}
