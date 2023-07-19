import { AuthState } from './authentication/auth.reducer';
import { CoursesState } from './courses/courses.reducer';

export interface AppState {
  auth: AuthState;
  courses: CoursesState;
}
