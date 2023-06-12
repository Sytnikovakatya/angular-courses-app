import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { OrderByPipe } from '@pipes/orderBy/order-by.pipe';
import { FilterPipe } from '@pipes/filter/filter.pipe';

import { Course } from '@interfaces/course.interface';
import { courses } from '@data/courses';

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

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
        OrderByPipe,
        FilterPipe,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
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
    const result = component.courseTrackBy(1, courses[0]);
    expect(result).toBe(3);
  });

  it('should update the filterBy value when newSearchEvent is emitted', () => {
    const searchValue = 'Angular';
    const searchBarComponent = fixture.debugElement.nativeElement.querySelector('app-search-bar');

    searchBarComponent.dispatchEvent(new CustomEvent('newSearchEvent', { detail: searchValue }));

    expect(component.filterBy).toBe(searchValue);
  });
});
