import { ComponentFixture, TestBed } from '@angular/core/testing';

import { courses } from '@data/courses';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
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

  it('should update the filterBy value', () => {
    const searchValue = 'Angular';

    component.getSearchValue(searchValue);

    expect(component.filterBy).toBe(searchValue);
  });
});
