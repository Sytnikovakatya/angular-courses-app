import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';

import { AppState } from '@store/app.state';
import { selectIsAuthenticated } from '@store/authentication/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  authenticated = false;
  subscription: Subscription;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);

    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'ua']);
  }

  ngOnInit(): void {
    this.subscription = this.isAuthenticated$.subscribe(authenticated => (this.authenticated = authenticated));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
