import { MockBuilder, MockRender } from 'ng-mocks';

import { CoursesService } from './courses.service';

import { Course } from '@interfaces/course.interface';
import { courses } from '@data/courses';

describe('CoursesService', () => {
  beforeEach(() => MockBuilder(CoursesService));

  it('should return all courses', () => {
    const service = MockRender(CoursesService).point.componentInstance;
    expect(service.getAll()).toEqual(courses);
  });

  it('should add a new course to the list', () => {
    const newItem: Course = {
      id: 4,
      name: 'New Course',
      date: new Date().toISOString(),
      length: 120,
      description: 'New course description',
    };

    const service = MockRender(CoursesService).point.componentInstance;
    service.addToCourses(newItem);
    expect(service.courses).toContain(newItem);
  });
});
