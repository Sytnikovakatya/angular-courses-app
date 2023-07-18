import { createAction, props } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';

export const setCourses = createAction('[Courses] Set Courses', props<{ courses: Course[] }>());
export const searchCourses = createAction('[Courses] Search Courses', props<{ courses: Course[] }>());
export const sortCourses = createAction('[Courses] Sort Courses', props<{ courses: Course[] }>());
export const loadMoreCourses = createAction('[Courses] Load More Courses', props<{ courses: Course[] }>());
export const createCourse = createAction('[Courses] Create Course', props<{ course: Course }>());
export const updateCourse = createAction('[Courses] Update Course', props<{ id: number; course: Course }>());
export const removeCourse = createAction('[Courses] Remove Course', props<{ id: number }>());
export const resetCourses = createAction('[Courses] Reset Courses');
