import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [CourseListComponent, CourseCardComponent, DeleteModalComponent, LoaderComponent, SearchBarComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
})
export class CoursesModule {}
