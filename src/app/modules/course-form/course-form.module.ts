import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';

import { CourseFormRoutingModule } from './course-form-routing.module';

import { AddCourseComponent } from './add-course/add-course.component';
import { AuthorsComponent } from './authors/authors.component';
import { DurationComponent } from './duration/duration.component';
import { DateInputComponent } from './date-input/date-input.component';

@NgModule({
  declarations: [AddCourseComponent, AuthorsComponent, DurationComponent, DateInputComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    CourseFormRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MatChipsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [AddCourseComponent],
})
export class CourseFormModule {}
