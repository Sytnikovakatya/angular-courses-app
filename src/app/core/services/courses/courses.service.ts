import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, tap } from 'rxjs';

import { Course } from '@shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:3004/courses';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + '?start=0&count=5');
  }

  loadMoreCourses(amount: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `?start=0&count=${amount}`);
  }

  searchCourse(term: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `?textFragment=${term}`);
  }

  orderCourses(value: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + `?sort=${value}`);
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
