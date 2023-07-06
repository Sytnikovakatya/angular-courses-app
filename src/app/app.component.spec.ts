import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedModule } from '@shared/shared.module';
import { Course } from '@interfaces/course.interface';

import { AppComponent } from './app.component';

@Component({
  selector: 'app-course-card',
  template: '<div>Mock Course Card Component</div>',
})
class MockCourseCardComponent {
  @Input() course: Course;
}

@Component({
  selector: 'app-header',
  template: '<div>Mock Header Component</div>',
})
class MockHeaderComponent {}

@Component({
  selector: 'app-logo',
  template: '<div class="logo">Mock Logo Component</div>',
})
class MockLogoComponent {}

@Component({
  selector: 'app-breadcrumbs',
  template: '<div>Mock Breadcrumbs Component</div>',
})
class MockBreadcrumbsComponent {}

@Component({
  selector: 'app-search-bar',
  template: '<div>Mock Search Bar Component</div>',
})
class MockSearchBarComponent {}

@Component({
  selector: 'app-footer',
  template: '<div>Mock Footer Component</div>',
})
class MockFooterComponent {}

@Component({
  selector: 'app-loader',
  template: '<div>Mock Loader Component</div>',
})
class MockLoaderComponent {}

@Component({
  selector: 'app-login',
  template: '<div>Mock Login Component</div>',
})
class MockLoginComponent {
  @Input() course: Course;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockLogoComponent,
        MockBreadcrumbsComponent,
        MockSearchBarComponent,
        MockFooterComponent,
        MockLoaderComponent,
        MockCourseCardComponent,
        MockLoginComponent,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
