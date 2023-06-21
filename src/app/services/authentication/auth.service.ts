import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthentificated: Subject<boolean> = new Subject();
  public isAuthentificated$: Observable<boolean> = this.isAuthentificated.asObservable();

  login(userEmail: string): void {
    if (userEmail) {
      console.log('Logged in successful!');

      localStorage.setItem('name', userEmail);
      localStorage.setItem('authenticated', 'true');
    } else {
      window.alert('Please, enter your email and password');
    }

    this.isAuthentificated.next(true);
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.setItem('authenticated', 'false');

    this.isAuthentificated.next(false);
  }

  isAuthenticated(): boolean {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    return authenticated;
  }

  getUserInfo(): string | null {
    return localStorage.getItem('name');
  }
}
