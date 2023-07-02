import { Injectable } from '@angular/core';

import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<string | null>;
  public user: Observable<string | null>;

  private isAuthentificated: Subject<boolean> = new Subject();
  public isAuthentificated$: Observable<boolean> = this.isAuthentificated.asObservable();

  constructor() {
    this.userSubject = new BehaviorSubject<string | null>(localStorage.getItem('name'));
    this.user = this.userSubject.asObservable();
  }

  login(userEmail: string): void {
    if (userEmail) {
      localStorage.setItem('name', userEmail);
      localStorage.setItem('authenticated', 'true');
      this.isAuthentificated.next(true);
      this.userSubject.next(userEmail);
    } else {
      window.alert('Please, enter your email and password');
    }
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.setItem('authenticated', 'false');

    this.isAuthentificated.next(false);
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    return authenticated;
  }
}
