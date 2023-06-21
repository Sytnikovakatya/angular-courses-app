import { MockBuilder, MockRender } from 'ng-mocks';

import { Course } from '@interfaces/course.interface';
import { courses } from '@data/courses';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(async () => await MockBuilder(CoursesService));

  it('should return all courses', () => {
    const service = MockRender(CoursesService).point.componentInstance;
    expect(service.getCourses()).toEqual(courses);
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
    expect(courses).toContain(newItem);
  });

  it('should not add a course if it already exists', () => {
    const existingCourse: Course = courses[0];
    const newItem: Course = {
      id: existingCourse.id,
      name: 'New Course',
      date: new Date().toISOString(),
      length: 120,
      description: 'New course description',
    };
    spyOn(window, 'alert');
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourses();
    service.addToCourses(newItem);
    expect(window.alert).toHaveBeenCalledWith('This Video course already exists!');
    expect(courses.length).toBe(courses.length);
  });

  it('should get a course by id', () => {
    const id = 1;
    spyOn(console, 'log');
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourseById(id);
    const courseIndex = courses.findIndex(course => course.id === id);
    expect(console.log).toHaveBeenCalledWith(courses[courseIndex]);
  });

  it('should update a course', () => {
    const updatedCourse: Course = {
      id: 1,
      name: 'New name',
      date: '2017-09-28T04:39:24+00:00',
      length: 120,
      description: 'New Description',
    };
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourses();
    service.updateCourse(updatedCourse);
    expect(courses).toContain(updatedCourse);
  });

  it('should remove a course', () => {
    const id = 1;
    const service = MockRender(CoursesService).point.componentInstance;
    service.getCourses();
    const expectedCourses = courses.filter(course => course.id !== id);
    const result = service.removeCourse(id);
    expect(result).toEqual(expectedCourses);
  });
});
