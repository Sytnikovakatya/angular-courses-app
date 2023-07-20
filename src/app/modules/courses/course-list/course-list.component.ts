import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';
import { selectCourses } from '@store/courses/courses.selectors';
import { selectLoading } from '@store/courses/courses.selectors';

import { Course } from '@interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  amountOfCourses = 5;
  courses: Course[] = [];
  loading = false;

  subscription1: Subscription;
  subscription2: Subscription;

  getStateCourses$: Observable<Course[]>;
  getStateLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.getStateCourses$ = this.store.select(selectCourses);
    this.getStateLoading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.setCourses());
    this.subscription1 = this.getStateCourses$.subscribe(courses => {
      this.courses = courses;
    });
    this.subscription2 = this.getStateLoading$.subscribe(loading => (this.loading = loading));
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
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
