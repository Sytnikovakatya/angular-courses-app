import { Component, OnInit } from '@angular/core';
import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';
import { AuthService } from '@services/authentication/auth.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  authentificated = false;
  filterBy = '';
  courses: Course[] = [];

  constructor(private coursesService: CoursesService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authentificated = this.authService.isAuthenticated();
    this.courses = this.coursesService.getCourses();
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): string {
    return (this.filterBy = newValue);
  }
}
