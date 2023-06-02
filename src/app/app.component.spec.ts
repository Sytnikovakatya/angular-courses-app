import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Course } from '@interfaces/course.interface';

describe('AppComponent', () => {
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
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-courses-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-courses-app');
  });

  it('should set a list of courses', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.courses.length).toBeGreaterThan(0);
  });

  it('should get the id of course', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.courseTrackBy(1, {
      id: 1,
      name: 'Javascript',
      date: '11/02/2023',
      length: 120,
      description: 'description',
    });
    expect(result).toBe(1);
  });
});
