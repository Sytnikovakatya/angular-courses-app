import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from './core/core.module';

import { SearchBarModule } from '@components/search-bar/search-bar.module';
import { LoginModule } from '@components/login/login.module';
import { CourseFormModule } from '@components/course-form/course-form.module';
import { CoursesModule } from '@components/courses/courses.module';
import { BreadcrumbsModule } from '@components/breadcrumbs/breadcrumbs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CoreModule,
    SharedModule,
    SearchBarModule,
    LoginModule,
    CourseFormModule,
    CoursesModule,
    BreadcrumbsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
