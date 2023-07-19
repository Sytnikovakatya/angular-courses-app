import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course } from '@shared/interfaces/course.interface';

import { AppState } from '@store/app.state';
import * as CoursesActions from '@store/courses/courses.actions';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:3004/courses';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) {}

  getCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.apiUrl + '?start=0&count=5')
      .pipe(tap(courses => this.store.dispatch(CoursesActions.setCourses({ courses }))));
  }

  loadMoreCourses(amount: number): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.apiUrl + `?start=0&count=${amount}`)
      .pipe(tap(courses => this.store.dispatch(CoursesActions.loadMoreCourses({ courses }))));
  }

  searchCourse(term: string): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.apiUrl + `?textFragment=${term}`)
      .pipe(tap(courses => this.store.dispatch(CoursesActions.searchCourses({ courses }))));
  }

  orderCourses(value: string): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.apiUrl + `?sort=${value}`)
      .pipe(tap(courses => this.store.dispatch(CoursesActions.sortCourses({ courses }))));
  }

  createCourse(newItem: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, newItem).pipe(tap(() => this.router.navigate(['/courses'])));
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.apiUrl + `/${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http
      .patch<Course>(this.apiUrl + `/${id}`, course, this.httpOptions)
      .pipe(tap(() => this.router.navigate(['/courses'])));
  }

  removeCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(this.apiUrl + `/${id}`);
  }
}
