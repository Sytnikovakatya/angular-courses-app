import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { CourseFormRoutingModule } from './course-form-routing.module';

import { AddCourseComponent } from './add-course/add-course.component';
import { AuthorsComponent } from './authors/authors.component';
import { DurationComponent } from './duration/duration.component';
import { DateInputComponent } from './date-input/date-input.component';

@NgModule({
  declarations: [AddCourseComponent, AuthorsComponent, DurationComponent, DateInputComponent],
  imports: [CommonModule, SharedModule, FormsModule, CourseFormRoutingModule],
  exports: [AddCourseComponent],
})
export class CourseFormModule {}
