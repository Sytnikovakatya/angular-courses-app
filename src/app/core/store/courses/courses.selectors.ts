import { createSelector } from '@ngrx/store';
import { AppState } from '@store/app.state';

export const selectCoursesState = (state: AppState) => state.courses;

export const selectCourses = createSelector(selectCoursesState, state => state.courses);
export const selectEditCourse = createSelector(selectCoursesState, state => state.course);
export const selectLoading = createSelector(selectCoursesState, state => state.loading);
