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
  currentCourse: Course;

  title = '';
  description = '';
  duration: number;
  date = new Date().toDateString();

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id && id !== 'new') {
        const findCourse = this.coursesService.getCourseById(+id);
        if (findCourse) {
          this.currentCourse = findCourse;
          this.title = this.currentCourse.name;
          this.description = this.currentCourse.description;
          this.duration = this.currentCourse.length;
          this.date = this.currentCourse.date;
        }
      }
    });
  }

  saveCourse(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== 'new') {
      const editCourse: Course = {
        ...this.currentCourse,
        name: this.title,
        date: this.date,
        length: this.duration,
        description: this.description,
      };
      this.coursesService.updateCourse(editCourse);
    } else {
      const newCourse: Course = {
        id: 7,
        name: this.title,
        date: this.date,
        length: this.duration,
        description: this.description,
      };
      this.coursesService.addToCourses(newCourse);
    }
    this.router.navigate(['/courses']);
  }

  close(): void {
    this.router.navigate(['/courses']);
  }
}
