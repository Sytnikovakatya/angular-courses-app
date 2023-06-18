import { Injectable } from '@angular/core';

import { Course } from '@interfaces/course.interface';

import { courses } from '@data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  courses: Course[] = [];

  getAll(): Course[] {
    return (this.courses = courses);
  }

  addToCourses(newItem: Course): void {
    if (this.courses.some(course => course.id === newItem.id)) {
      window.alert('This Video course already exists!');
    } else {
      this.courses.push(newItem);
    }
  }

  getCourseById(id: number): void {
    let chosenCourse = this.courses.filter((course: Course) => course.id === id);
    console.log(chosenCourse[0]);
  }

  updateCourse(item: Course): void {
    this.courses.forEach((course, index) => {
      if (course.name === item.name) {
        this.courses[index] = {
          id: course.id,
          name: 'New name',
          date: course.date,
          length: course.length,
          description: 'New Description',
        };
      }
    });
  }

  removeCourse(id: number): Course[] {
    return (this.courses = this.courses.filter(course => {
      return course.id !== id;
    }));
  }
}
