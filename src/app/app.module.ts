import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from '@shared/button/button.component';
import { InputComponent } from '@shared/input/input.component';
import { DateInputComponent } from '@shared/date-input/date-input.component';

import { HighlightDirective } from '@directives/hightlight/highlight.directive';
import { IfAuthenticatedDirective } from '@directives/ifAuthenticated/if-authenticated.directive';

import { DurationPipe } from '@pipes/duration/duration.pipe';
import { OrderByPipe } from '@pipes/orderBy/order-by.pipe';
import { FilterPipe } from '@pipes/filter/filter.pipe';

import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from '@components/course-card/course-card.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/logo/logo.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { LoginComponent } from '@components/login/login.component';
import { DeleteModalComponent } from '@components/delete-modal/delete-modal.component';
import { AddCourseComponent } from '@components/add-course/add-course.component';
import { AuthorsComponent } from '@components/authors/authors.component';
import { DurationComponent } from '@components/duration/duration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SearchBarComponent,
    CourseCardComponent,
    LogoComponent,
    ButtonComponent,
    InputComponent,
    LoaderComponent,
    HighlightDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    LoginComponent,
    DeleteModalComponent,
    IfAuthenticatedDirective,
    AddCourseComponent,
    DateInputComponent,
    AuthorsComponent,
    DurationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
