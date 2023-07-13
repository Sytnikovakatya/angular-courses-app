import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Course } from '@interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';
import { SpinnerOverlayService } from '@services/spinner-overlay/spinner-overlay.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  amountOfCourses = 5;
  courses: Course[] = [];
  subscription: Subscription;

  loading$ = this.loader.loading$;

  constructor(private coursesService: CoursesService, public loader: SpinnerOverlayService) {}

  ngOnInit(): void {
    this.subscription = this.coursesService.getCourses().subscribe(courses => (this.courses = courses));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  deleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== +id);
    this.coursesService.removeCourse(+id).subscribe();
  }
}
