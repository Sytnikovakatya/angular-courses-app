import { createReducer, on } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';
import * as CoursesActions from './courses.actions';

export interface CoursesState {
  courses: Course[];
  course: Course | null;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  course: null,
  error: null,
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.setCourses, state => ({ ...state, error: null })),
  on(CoursesActions.setCoursesSuccess, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.searchCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.getCourse, state => ({ ...state, error: null })),
  on(CoursesActions.getCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(CoursesActions.getCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.searchCourses, state => ({ ...state, error: null })),
  on(CoursesActions.searchCoursesSuccess, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.searchCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.sortCourses, state => ({ ...state, error: null })),
  on(CoursesActions.sortCoursesSuccess, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.sortCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(CoursesActions.loadMoreCourses, state => ({ ...state, error: null })),
  on(CoursesActions.loadMoreCoursesSuccess, (state, { courses }) => ({ ...state, courses })),
  on(CoursesActions.loadMoreCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

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
