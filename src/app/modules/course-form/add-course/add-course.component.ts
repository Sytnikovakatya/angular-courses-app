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
  course: Course = {
    id: 0,
    name: '',
    description: '',
    length: 0,
    date: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.coursesService.getCourseById(+id).subscribe(course => (this.course = course));
    }
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
