import { Component, OnInit } from '@angular/core';

import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  amountOfCourses = 5;
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => (this.courses = courses));
  }

  courseTrackBy(index: number, course: Course): number {
    return course.id;
  }

  getSearchValue(newValue: string): void {
    this.coursesService.searchCourse(newValue).subscribe(courses => (this.courses = courses));
  }

  getSortValue(value: string): void {
    this.coursesService.orderCourses(value).subscribe(courses => (this.courses = courses));
  }

  load(): void {
    this.amountOfCourses += 5;
    this.coursesService.loadMoreCourses(this.amountOfCourses).subscribe(courses => (this.courses = courses));
  }

  deleteCourse(id: string) {
    this.courses = this.courses.filter(course => course.id !== +id);
    this.coursesService.removeCourse(+id).subscribe();
  }
}
