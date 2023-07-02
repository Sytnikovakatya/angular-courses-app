import { Injectable } from '@angular/core';

import { Course } from '@shared/interfaces/course.interface';

import { courses } from 'app/core/data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getCourses(): Course[] {
    return courses;
  }

  addToCourses(newItem: Course): void {
    if (courses.some(course => course.id === newItem.id)) {
      window.alert('This Video course already exists!');
    } else {
      courses.push(newItem);
    }
  }

  getCourseById(id: number): Course | undefined {
    return courses.find((course: Course) => course.id === id);
  }

  updateCourse(item: Course): void {
    courses.forEach((course, index) => {
      if (course.id === item.id) {
        courses[index] = item;
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
