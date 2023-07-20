import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  authenticated = false;
  subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.isAuthenticated.subscribe(
      authenticated => (this.authenticated = authenticated)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
