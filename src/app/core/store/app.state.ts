import { AuthState } from './authentication/auth.reducer';
import { CoursesState } from './courses/courses.reducer';
import { authReducer } from './authentication/auth.reducer';
import { coursesReducer } from './courses/courses.reducer';

export interface AppState {
  auth: AuthState;
  courses: CoursesState;
}

export const reducers = {
  auth: authReducer,
  course: coursesReducer,
};
