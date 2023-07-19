import { createSelector } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: AppState) => state.auth;

export const selectErrorMsg = createSelector(selectAuthState, (state: AuthState) => state.error);
