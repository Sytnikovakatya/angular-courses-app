import { createAction, props } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';

export const setCourses = createAction('[Courses] Set Courses', props<{ courses: Course[] }>());
export const searchCourses = createAction('[Courses] Search Courses', props<{ courses: Course[] }>());
export const sortCourses = createAction('[Courses] Sort Courses', props<{ courses: Course[] }>());
export const loadMoreCourses = createAction('[Courses] Load More Courses', props<{ courses: Course[] }>());

export const createCourse = createAction('[Courses] Create Course', props<{ course: Course }>());
export const createCourseSuccess = createAction('[Courses] Create Course Success', props<{ course: Course }>());
export const createCourseFailure = createAction('[Courses] Create Course Failure', props<{ errorMsg: string }>());

export const updateCourse = createAction('[Courses] Update Course', props<{ id: number; course: Course }>());
export const updateCourseSuccess = createAction(
  '[Courses] Update Course Success',
  props<{ id: number; course: Course }>()
);
export const updateCourseFailure = createAction('[Courses] Update Course Failure', props<{ errorMsg: string }>());

export const removeCourse = createAction('[Courses] Remove Course', props<{ id: number }>());
export const removeCourseSuccess = createAction('[Courses] Remove Course Success', props<{ id: number }>());
export const removeCourseFailure = createAction('[Courses] Remove Course Failure', props<{ errorMsg: string }>());

export const resetCourses = createAction('[Courses] Reset Courses');
