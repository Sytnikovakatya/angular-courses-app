import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from '@shared/interfaces/user.interface';

import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import * as AuthActions from '@store/authentication/auth.actions';
import * as CoursesActions from '@store/courses/courses.actions';
import { selectUserInfo } from '@store/authentication/auth.selectors';

import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authenticated = false;
  user?: User | null;
  subscriptions: Subscription[] = [];
  userDetails$: Observable<User | null>;

  constructor(public authService: AuthService, private store: Store<AppState>) {
    this.userDetails$ = this.store.select(selectUserInfo);
  }

  ngOnInit(): void {
    const sub1 = this.userDetails$.subscribe(user => {
      this.user = user;
    });
    this.subscriptions.push(sub1);
    const sub2 = this.authService.isAuthenticated.subscribe(authenticated => (this.authenticated = authenticated));
    this.subscriptions.push(sub2);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.store.dispatch(CoursesActions.resetCourses());
  }
}
