import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from '@shared/button/button.component';
import { InputComponent } from '@shared/input/input.component';

import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from '@components/course-card/course-card.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/logo/logo.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { NoCoursesComponent } from './components/no-courses/no-courses/no-courses.component';
import { HighlightDateDirective } from './directives/hightlight-date/highlight-date.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';

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
    NoCoursesComponent,
    HighlightDateDirective,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
