import { createReducer, on } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';
import * as CoursesActions from './courses.actions';

export interface CoursesState {
  courses: Course[];
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  error: null,
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.setCourses, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.searchCourses, state => ({ ...state })),
  on(CoursesActions.sortCourses, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.loadMoreCourses, (state, { courses }) => ({ ...state, courses })),

  on(CoursesActions.createCourse, state => ({ ...state, error: null })),
  on(CoursesActions.createCourseSuccess, (state, { course }) => ({ ...state, courses: [...state.courses, course] })),
  on(CoursesActions.createCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.updateCourse, state => ({ ...state, error: null })),
  on(CoursesActions.updateCourseSuccess, (state, { id, course }) => ({
    ...state,
    courses: state.courses.map(el => (el.id === id ? course : el)),
  })),
  on(CoursesActions.updateCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.removeCourse, state => ({ ...state, error: null })),
  on(CoursesActions.removeCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id),
  })),
  on(CoursesActions.removeCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.resetCourses, state => ({ ...state, courses: [] }))
);
