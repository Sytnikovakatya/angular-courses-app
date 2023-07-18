import { createReducer, on } from '@ngrx/store';

import { User } from '@shared/interfaces/user.interface';
import { Token } from '@shared/interfaces/token.interface';

import * as AuthActions from './auth.actions';

export interface AuthState {
  token: Token | null;
  user: User | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, { token }) => ({ ...state, token })),
  on(AuthActions.getUserInfo, (state, { user }) => ({ ...state, user, isAuthenticated: true })),
  on(AuthActions.logout, state => ({ ...state, token: null, user: null, isAuthenticated: false }))
);
