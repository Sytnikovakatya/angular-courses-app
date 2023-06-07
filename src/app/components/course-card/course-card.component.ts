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

  transformMinute(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = Math.floor(value % 60);

    if (hours === 0 && minutes < 59) {
      return minutes + ' mins';
    } else if (minutes > 0) {
      return hours + 'h ' + (minutes < 10 ? '0' + minutes : minutes) + ' mins';
    } else {
      return hours + (hours === 1 ? ' hour' : ' hours');
    }
  }

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
}
