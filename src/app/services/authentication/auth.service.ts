import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _eventSubject: Subject<boolean> = new Subject();
  public event$: Observable<boolean> = this._eventSubject.asObservable();
  constructor() {}

  login(userEmail: string): void {
    if (userEmail) {
      console.log('Logged in successful!');

      localStorage.setItem('name', userEmail);
      localStorage.setItem('authenticated', 'true');
    } else {
      window.alert('Please, enter your email and password');
    }

    this._eventSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.setItem('authenticated', 'false');

    this._eventSubject.next(false);
  }

  isAuthenticated(): boolean {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    return authenticated;
  }

  getUserInfo(): string | null {
    return localStorage.getItem('name');
  }
}
