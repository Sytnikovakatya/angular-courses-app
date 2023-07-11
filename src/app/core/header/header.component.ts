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
  subscription: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe(user => (this.user = user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
