import { Injectable } from '@angular/core';

import { Course } from '@interfaces/course.interface';

import { courses } from '@data/courses';

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

  getCourseById(id: number): void {
    const chosenCourse = courses.filter((course: Course) => course.id === id);
    console.log(chosenCourse[0]);
  }

  updateCourse(item: Course): void {
    courses.forEach((course, index) => {
      if (course.id === item.id) {
        courses[index] = { ...course, name: 'New name', description: 'New Description' };
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
