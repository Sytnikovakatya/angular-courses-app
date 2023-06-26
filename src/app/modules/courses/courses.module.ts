import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { CourseCardComponent } from './course-card/course-card.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [CourseCardComponent, DeleteModalComponent, LoaderComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CourseCardComponent, LoaderComponent],
})
export class CoursesModule {}
