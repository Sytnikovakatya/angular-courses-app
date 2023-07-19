import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { Course } from '@shared/interfaces/course.interface';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';
import { selectEditCourse } from '@store/courses/courses.selectors';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit, OnDestroy {
  id: string | null;
  author = '';
  subscription: Subscription;
  getState$: Observable<Course | null>;

  course: Course = {
    id: 0,
    name: '',
    description: '',
    length: 0,
    date: new Date().toDateString(),
    authors: [],
    isTopRated: false,
  };

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    this.getState$ = this.store.select(selectEditCourse);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.getState$.subscribe(course => {
      course ? (this.course = course) : this.course;
    });
    this.getCourse();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCourse(): void {
    if (this.id && this.id !== 'new') {
      this.store.dispatch(CoursesActions.getCourse({ id: +this.id }));
    }
  }

  saveCourse(): void {
    this.course.authors = this.author ? [{ id: 1, name: this.author }] : [];

    if (this.id && this.id !== 'new') {
      this.store.dispatch(CoursesActions.updateCourse({ id: +this.id, course: this.course }));
    } else {
      this.store.dispatch(CoursesActions.createCourse({ course: this.course }));
    }
  }

  close(): void {
    this.router.navigate(['/courses']);
  }
}
