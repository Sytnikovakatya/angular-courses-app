import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

import { Course } from '@shared/interfaces/course.interface';

import { courses } from '@data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:3004/courses';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + '?start=0&count=5').pipe(catchError(this.handleError));
  }

  loadMoreCourses(amount: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `?start=0&count=${amount}`);
  }

  addToCourses(newItem: Course): void {
    if (courses.some(course => course.id === newItem.id)) {
      window.alert('This Video course already exists!');
    } else {
      //courses.push(newItem);
      console.log(newItem);
    }
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.apiUrl + `/${id}`).pipe(catchError(this.handleError));
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.patch<Course>(this.apiUrl + `/${id}`, course, this.httpOptions).pipe(catchError(this.handleError));
  }

  removeCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(this.apiUrl + `/${id}`).pipe(catchError(this.handleError));
  }

  handleError(error: { error: { message: string }; status: number }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
