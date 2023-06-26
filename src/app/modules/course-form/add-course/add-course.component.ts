import { Component } from '@angular/core';
import { Course } from '@shared/interfaces/course.interface';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  title = '';
  description = '';
  duration: number;
  date = '';

  saveCourse(): void {
    const newCourse: Course = {
      id: 7,
      name: this.title,
      date: this.date,
      length: this.duration,
      description: this.description,
    };

    console.log('Save new Course');
    console.log(newCourse);
  }

  close(): void {
    console.log('Close page');
  }
}
