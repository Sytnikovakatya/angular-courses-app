import { Component, OnInit } from '@angular/core';

import { courses } from '../app/data/courses';
import { Course } from './interfaces/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = courses;
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }
}
