import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthentificated: Subject<boolean> = new Subject();
  public isAuthentificated$: Observable<boolean> = this.isAuthentificated.asObservable();

  get loggedInUser(): string | null {
    const user = localStorage.getItem('name');
    return user;
  }

  login(userEmail: string): void {
    if (userEmail) {
      localStorage.setItem('name', userEmail);
      localStorage.setItem('authenticated', 'true');
      this.isAuthentificated.next(true);
    } else {
      window.alert('Please, enter your email and password');
    }
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
}
