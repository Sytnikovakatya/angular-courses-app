import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { Course } from '@interfaces/course.interface';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
    selector: 'app-course-card',
    template: '<div>Mock Course Card Component</div>',
  })
  class MockCourseCardComponent {
    @Input() course: Course;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockLogoComponent,
        MockBreadcrumbsComponent,
        MockSearchBarComponent,
        MockFooterComponent,
        MockLoaderComponent,
        MockCourseCardComponent,
      ],
    });
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-courses-app'`, () => {
    expect(component.title).toEqual('angular-courses-app');
  });

  it('should set a list of courses', () => {
    component.ngOnInit();
    expect(component.courses).toHaveSize(3);
  });

  it('should get the id of course', () => {
    const result = component.courseTrackBy(1, {
      id: 1,
      name: 'Javascript',
      date: '11/02/2023',
      length: 120,
      description: 'description',
    });
    expect(result).toBe(1);
  });
});
