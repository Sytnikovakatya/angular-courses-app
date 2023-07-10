import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '@shared/interfaces/course.interface';

import { CoursesService } from '@services/courses/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  id: string | null;
  author = '';

  course: Course = {
    id: 0,
    name: '',
    description: '',
    length: 0,
    date: new Date().toDateString(),
    authors: [],
    isTopRated: false,
  };

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourse();
  }

  getCourse(): void {
    if (this.id && this.id !== 'new') {
      this.coursesService.getCourseById(+this.id).subscribe(course => (this.course = course));
    }
  }

  saveCourse(): void {
    this.course.authors = this.author ? [{ id: 1, name: this.author }] : [];

    if (this.id && this.id !== 'new') {
      this.coursesService.updateCourse(+this.id, this.course).subscribe(() => this.router.navigate(['/courses']));
    } else {
      this.coursesService.createCourse(this.course).subscribe(() => this.router.navigate(['/courses']));
    }
  }

  close(): void {
    this.router.navigate(['/courses']);
  }
}
