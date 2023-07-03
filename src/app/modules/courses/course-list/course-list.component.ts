import { Component, OnInit } from '@angular/core';
import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filterBy = '';
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => (this.courses = courses));
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): string {
    return (this.filterBy = newValue);
  }
}
