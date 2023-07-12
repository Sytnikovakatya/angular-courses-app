import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from '@shared/interfaces/user.interface';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authenticated = false;
  user?: User | null;
  subscription1$: Subscription;
  subscription2$: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.subscription1$ = this.authService.user.subscribe(user => (this.user = user));
    this.subscription2$ = this.authService.isAuthentificated.subscribe(
      authenticated => (this.authenticated = authenticated)
    );
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
