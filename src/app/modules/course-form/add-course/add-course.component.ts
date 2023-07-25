import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Course } from '@shared/interfaces/course.interface';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  id: string | null;
  author = '';
  editingCourse$: Observable<Course | null>;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourse();
  }

  getCourse(): void {
    if (this.id && this.id !== 'new') {
      this.coursesService.getCourseById(+this.id).subscribe(course => (this.course = course));
    }
  }

  onChangeCode(code: string) {
    this.course.name = code;
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

  invalid(property: string): boolean | undefined {
    const element = this.courseForm.get(property);
    return element?.invalid && (element?.dirty || element?.touched);
  }

  hasError(property: string) {
    const element = this.courseForm.get(property);
    return element?.hasError('required') && (element?.dirty || element?.touched);
  }

  hasMaxLength(property: string) {
    return this.courseForm.get(property)?.hasError('maxlength');
  }
}
