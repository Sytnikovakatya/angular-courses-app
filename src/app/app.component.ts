import { Component, OnInit } from '@angular/core';

import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';
import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-courses-app';
  authentificated = false;
  filterBy = '';

  constructor(public coursesService: CoursesService, public authService: AuthService) {}

  ngOnInit(): void {
    this.authentificated = this.authService.isAuthenticated();
    this.coursesService.getAll();
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): string {
    return (this.filterBy = newValue);
  }
}
