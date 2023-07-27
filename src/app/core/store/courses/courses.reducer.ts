import { createReducer, on } from '@ngrx/store';
import { Course } from '@shared/interfaces/course.interface';
import * as CoursesActions from './courses.actions';
import { Author } from '@shared/interfaces/author';

export interface CoursesState {
  courses: Course[];
  authors: Author[];
  course: Course | null;
  error: string | null;
  loading: boolean;
}

const initialState: CoursesState = {
  courses: [],
  authors: [],
  course: null,
  error: null,
  loading: false,
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.setCourses, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.setCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(CoursesActions.searchCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.getCourse, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.getCourseSuccess, (state, { course }) => ({ ...state, course: course, loading: false })),
  on(CoursesActions.getCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.searchCourses, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.searchCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(CoursesActions.searchCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.sortCourses, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.sortCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(CoursesActions.sortCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.loadMoreCourses, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.loadMoreCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(CoursesActions.loadMoreCoursesFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.createCourse, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.createCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
    loading: false,
    course: null,
  })),
  on(CoursesActions.createCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.updateCourse, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.updateCourseSuccess, (state, { id, course }) => ({
    ...state,
    courses: state.courses.map(el => (el.id === id ? course : el)),
    loading: false,
    course: null,
  })),
  on(CoursesActions.updateCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.removeCourse, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.removeCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id),
    loading: false,
  })),
  on(CoursesActions.removeCourseFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false })),

  on(CoursesActions.resetCourses, state => ({ ...state, courses: [], course: null, authors: [], loading: false })),
  on(CoursesActions.resetEditCourse, state => ({ ...state, course: null })),

  on(CoursesActions.setAuthorList, state => ({ ...state, error: null, loading: true })),
  on(CoursesActions.setAuthorListSuccess, (state, { authors }) => ({ ...state, authors, loading: false })),
  on(CoursesActions.setAuthorListFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg, loading: false }))
);
