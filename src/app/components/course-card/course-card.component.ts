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

  higlightCreationDate(date: number): string {
    const daysOffset = 24 * 60 * 60 * 1000 * 14;
    const condition = Date.now() - daysOffset;

    if (date < Date.now() && date >= condition) {
      return 'lightseagreen';
    } else if (date > Date.now()) {
      return '#0d6efd';
    } else {
      return 'lightgrey';
    }
  }

  delete(id: number): void {
    console.log('Delete №' + id);
  }
}
