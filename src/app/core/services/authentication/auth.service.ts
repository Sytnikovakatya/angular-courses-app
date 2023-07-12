import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject, map, Subject } from 'rxjs';

import { User } from '@shared/interfaces/user.interface';
import { Token } from '@shared/interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/auth';

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  public isAuthentificated: BehaviorSubject<boolean> = new BehaviorSubject(
    JSON.parse(localStorage.getItem('authenticated')!)
  );

  public isAuthentificated$: Observable<boolean> = this.isAuthentificated.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  get user(): Observable<User | null> {
    return this.user$;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthentificated$;
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(credentials: { login: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', credentials);
  }

  logout(): void {
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('token');

    this.userSubject.next(null);
    this.isAuthentificated.next(false);

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
