import { createAction, props } from '@ngrx/store';

import { Token } from '@shared/interfaces/token.interface';
import { User } from '@shared/interfaces/user.interface';

export const login = createAction('[Auth] Login', props<{ credentials: { login: string; password: string } }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: Token }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ errorMsg: string }>());

export const logout = createAction('[Auth] Logout');

export const getUserInfo = createAction('[Auth] Get User Info');
export const getUserInfoSuccess = createAction('[Auth] Get User Info Success', props<{ user: User }>());
export const getUserInfoFailure = createAction('[Auth] Get User Info Failure', props<{ errorMsg: string }>());
