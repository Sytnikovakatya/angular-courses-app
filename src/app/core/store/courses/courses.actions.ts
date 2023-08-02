import { createAction, props } from '@ngrx/store';
import { Author } from '@shared/interfaces/author';
import { Course } from '@shared/interfaces/course.interface';

export const setCourses = createAction('[Courses] Set Courses');
export const setCoursesSuccess = createAction('[Courses] Set Courses Success', props<{ courses: Course[] }>());
export const setCoursesFailure = createAction('[Courses] Set Courses Failure', props<{ errorMsg: string }>());

export const getCourse = createAction('[Courses] Get Course', props<{ id: number }>());
export const getCourseSuccess = createAction('[Courses] Get Course Success', props<{ course: Course }>());
export const getCourseFailure = createAction('[Courses] Get Course Failure', props<{ errorMsg: string }>());

export const searchCourses = createAction('[Courses] Search Courses', props<{ newValue: string }>());
export const searchCoursesSuccess = createAction('[Courses] Search Courses Success', props<{ courses: Course[] }>());
export const searchCoursesFailure = createAction('[Courses] Search Courses Failure', props<{ errorMsg: string }>());

export const sortCourses = createAction('[Courses] Sort Courses', props<{ value: string }>());
export const sortCoursesSuccess = createAction('[Courses] Sort Courses Success', props<{ courses: Course[] }>());
export const sortCoursesFailure = createAction('[Courses] Sort Courses Failure', props<{ errorMsg: string }>());

export const loadMoreCourses = createAction('[Courses] Load More Courses', props<{ amount: number }>());
export const loadMoreCoursesSuccess = createAction(
  '[Courses] Load More Courses Success',
  props<{ courses: Course[] }>()
);
export const loadMoreCoursesFailure = createAction(
  '[Courses] Load More Courses Failure',
  props<{ errorMsg: string }>()
);

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
export const resetEditCourse = createAction('[Courses] Reset Edit Course');

export const setAuthorList = createAction('[Courses] Set Author List');
export const setAuthorListSuccess = createAction('[Courses] Set Author List Success', props<{ authors: Author[] }>());
export const setAuthorListFailure = createAction('[Courses] Set Author List Failure', props<{ errorMsg: string }>());
