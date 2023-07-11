import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject, map } from 'rxjs';

import { User } from '@shared/interfaces/user.interface';
import { Token } from '@shared/interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/auth';

  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubject.asObservable();
  }

  get user() {
    return this.user$;
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(credentials: { login: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', credentials);
  }

  logout(): void {
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.userSubject.next(null);

    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    return authenticated;
  }

  getUserInfo(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/userinfo', { token: localStorage.getItem('token') }).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }
}
