import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject, map, tap } from 'rxjs';

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

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  public authentication: BehaviorSubject<boolean> = new BehaviorSubject(
    JSON.parse(localStorage.getItem('authenticated')!)
  );

  public isAuthenticated$: Observable<boolean> = this.authentication.asObservable();

  constructor(private http: HttpClient, private router: Router, private store: Store<AppState>) {}

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(credentials: { login: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', credentials).pipe(
      tap(token => {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('token', token.token);

        this.authentication.next(true);

        this.store.dispatch(AuthActions.getUserInfo());

        this.router.navigate(['/courses']);
      })
    );
  }

  logout(): void {
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('token');

    this.userSubject.next(null);
    this.authentication.next(false);

    this.router.navigate(['/login']);
  }

  getUserInfo(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/userinfo', { token: localStorage.getItem('token') }).pipe(
      map(user => {
        this.userSubject.next(user);
        return user;
      })
    );
  }
}
