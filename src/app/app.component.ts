import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { User } from '@shared/interfaces/user.interface';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  user?: User | null;
  authenticated = false;
  subscription: Subscription;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.authService.isAuthentificated.subscribe(
      authenticated => (this.authenticated = authenticated)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
