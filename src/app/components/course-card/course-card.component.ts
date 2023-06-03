import { Component, Input } from '@angular/core';

import { Course } from '@interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: Course;

  delete(id: number): void {
    console.log('Delete №' + id);
  }

  transformMinute(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = Math.floor(value % 60);

    if (hours === 0 && minutes < 59) {
      return minutes + ' min';
    } else if (minutes > 0) {
      return hours + 'h ' + (minutes < 10 ? '0' + minutes : minutes) + ' min';
    } else {
      return hours + (hours === 1 ? ' hour' : ' hours');
    }
  }
}
