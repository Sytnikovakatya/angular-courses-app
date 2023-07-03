import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Course } from '@shared/interfaces/course.interface';

import { courses } from '@data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:3004';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl + '/courses?start=0&count=5');
  }

  addToCourses(newItem: Course): void {
    if (courses.some(course => course.id === newItem.id)) {
      window.alert('This Video course already exists!');
    } else {
      //courses.push(newItem);
      console.log(newItem);
    }
  }

  getCourseById(id: number): Course | undefined {
    return courses.find((course: Course) => course.id === id);
  }

  updateCourse(item: Course): void {
    courses.forEach((course, index) => {
      if (course.id === item.id) {
        //courses[index] = item;
        console.log(item);
      }
    });
  }

  removeCourse(id: number): void {
    courses.forEach((course, index) => {
      if (course.id === id) {
        courses.splice(index, 1);
      }
    });
  }
}
