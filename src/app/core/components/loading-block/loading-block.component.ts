import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';
import { selectLoading } from '@store/courses/courses.selectors';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css'],
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  loading = false;
  subscription: Subscription;
  getState$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.getState$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.setCourses());
    this.subscription = this.getState$.subscribe(loading => {
      this.loading = loading;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
