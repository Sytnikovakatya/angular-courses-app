import { Component } from '@angular/core';
import { courses as data } from '../app/data/courses';
import { Course } from './interfaces/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-courses-app';

  courses: Course[] = data;

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }
}
