import { Component, OnInit } from '@angular/core';

import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  authentificated = true;
  filterBy = '';

  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getAll();
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): string {
    return (this.filterBy = newValue);
  }
}
