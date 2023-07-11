import { MockBuilder, MockRender } from 'ng-mocks';

import { Course } from '@shared/interfaces/course.interface';
import { courses } from '@data/courses';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(async () => await MockBuilder(CoursesService));

  it('should get a course by id', () => {
    const id = 1;
    spyOn(console, 'log');
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourseById(id);
    const courseIndex = courses.findIndex(course => course.id === id);
    expect(console.log).toHaveBeenCalledWith(courses[courseIndex]);
  });

  it('should remove a course', () => {
    const id = 1;
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourses();
    const expectedCourses = courses.filter(course => course.id !== id);
    service.removeCourse(id);
    expect(courses).toEqual(expectedCourses);
  });
});
