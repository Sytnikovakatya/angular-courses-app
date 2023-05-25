import { Component, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: Course;

  delete(id: number) {
    console.log('Delete №' + id);
  }

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);

    if (minutes > 0) {
      return hours + 'h ' + (minutes < 10 ? '0' + minutes : minutes) + ' mins';
    } else {
      return hours + ' hours';
    }
  }
}
