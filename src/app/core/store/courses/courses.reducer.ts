import { createReducer, on } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';
import * as CoursesActions from './courses.actions';

export interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.setCourses, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.searchCourses, state => ({ ...state })),
  on(CoursesActions.sortCourses, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.loadMoreCourses, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.createCourse, (state, { course }) => ({ ...state, courses: [...state.courses, course] })),
  on(CoursesActions.updateCourse, (state, { id, course }) => ({
    ...state,
    courses: [...state.courses.filter(course => course.id !== id), course],
  })),
  on(CoursesActions.removeCourse, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id),
  })),
  on(CoursesActions.resetCourses, state => ({ ...state, courses: [] }))
);
