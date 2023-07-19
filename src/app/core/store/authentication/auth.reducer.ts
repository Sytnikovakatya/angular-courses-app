import { createReducer, on } from '@ngrx/store';

import { User } from '@shared/interfaces/user.interface';
import { Token } from '@shared/interfaces/token.interface';

import * as AuthActions from './auth.actions';

export interface AuthState {
  token: Token | null;
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, state => ({ ...state, error: null })),
  on(AuthActions.loginSuccess, (state, { token }) => ({ ...state, token, error: null })),
  on(AuthActions.loginFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(AuthActions.getUserInfo, state => ({ ...state, error: null })),
  on(AuthActions.getUserInfoSuccess, (state, { user }) => ({ ...state, user, isAuthenticated: true, error: null })),
  on(AuthActions.getUserInfoFailure, (state, { errorMsg }) => ({ ...state, error: errorMsg })),

  on(AuthActions.logout, state => ({ ...state, token: null, user: null, isAuthenticated: false, error: null }))
);
