import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { courses } from '@data/courses';

import { CourseListComponent } from './course-list.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: '<div>Mock Search Bar Component</div>',
})
class MockSearchBarComponent {}

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CourseListComponent, MockSearchBarComponent],
    });
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the id of course', () => {
    const result = component.courseTrackBy(1, courses[0]);
    fixture.detectChanges();
    expect(result).toBe(courses[0].id);
  });
});
