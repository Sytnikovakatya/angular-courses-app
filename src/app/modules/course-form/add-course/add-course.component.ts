import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import { Course } from '@shared/interfaces/course.interface';
import { Author } from '@shared/interfaces/author';

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
  subscription: Subscription;
  getCourse$: Observable<Course | null>;

  course: Course = {
    id: 0,
    name: '',
    description: '',
    length: 0,
    date: new Date().toDateString(),
    authors: [],
    isTopRated: false,
  };

  courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
    date: ['', [Validators.required]],
    authors: ['', [Validators.required]],
  });

  get hasTitleError() {
    const element = this.courseForm.get('title');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  get hasTitleMaxLength() {
    return this.courseForm.get('title')?.hasError('maxlength');
  }

  get hasDescrError() {
    const element = this.courseForm.get('description');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  get hasDescrMaxLength() {
    return this.courseForm.get('description')?.hasError('maxlength');
  }

  get hasDurationError() {
    const element = this.courseForm.get('duration');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  get hasDateError() {
    const element = this.courseForm.get('date');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  get hasAuthorsError() {
    const element = this.courseForm.get('authors');
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.getCourse$ = this.store.select(selectEditCourse);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(CoursesActions.setAuthorList());
    this.getCourse();

    this.subscription = this.getCourse$.subscribe(course => {
      if (course) this.course = { ...course };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCourse(): void {
    if (this.id && this.id !== 'new') {
      this.store.dispatch(CoursesActions.getCourse({ id: +this.id }));
    }
  }

  receiveAuthorList($event: Author[]) {
    this.course.authors = $event;
  }

  saveCourse(): void {
    if (this.id && this.id !== 'new') {
      this.store.dispatch(CoursesActions.updateCourse({ id: +this.id, course: this.course }));
    } else {
      this.store.dispatch(CoursesActions.createCourse({ course: this.course }));
    }
  }

  close(): void {
    this.store.dispatch(CoursesActions.resetEditCourse());
    this.router.navigate(['/courses']);
  }

  invalid(property: string): boolean | undefined {
    const element = this.courseForm.get(property);
    return element?.invalid && (element?.dirty || element?.touched);
  }
}
