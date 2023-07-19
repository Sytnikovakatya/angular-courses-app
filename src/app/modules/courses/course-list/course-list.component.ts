import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';
import { selectCourses } from '@store/courses/courses.selectors';

import { Course } from '@interfaces/course.interface';

import { SpinnerOverlayService } from '@services/spinner-overlay/spinner-overlay.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  amountOfCourses = 5;
  courses: Course[] = [];
  subscription: Subscription;
  getState$: Observable<Course[]>;

  loading$ = this.loader.loading$;

  constructor(public loader: SpinnerOverlayService, private store: Store<AppState>) {
    this.getState$ = this.store.select(selectCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.setCourses());
    this.subscription = this.getState$.subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): void {
    this.store.dispatch(CoursesActions.searchCourses({ newValue }));
  }

  getSortValue(value: string): void {
    this.store.dispatch(CoursesActions.sortCourses({ value: value }));
  }

  load(): void {
    this.amountOfCourses += 5;
    this.store.dispatch(CoursesActions.loadMoreCourses({ amount: this.amountOfCourses }));
  }

  deleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== +id);
    this.store.dispatch(CoursesActions.removeCourse({ id: +id }));
  }
}
