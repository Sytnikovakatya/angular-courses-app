import { Component, Input } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: Course;

  isTopRated = false;

  delete(id: number): void {
    console.log('Delete №' + id);
  }
}
