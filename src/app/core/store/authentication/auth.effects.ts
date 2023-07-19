import { Injectable } from '@angular/core';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '@services/authentication/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map(token => AuthActions.loginSuccess({ token })),
          catchError((error: { message: string }) => of(AuthActions.loginFailure({ errorMsg: error.message })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        map(action => {
          this.authService.logout();
        })
      ),
    { dispatch: false }
  );

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUserInfo),
      exhaustMap(() =>
        this.authService.getUserInfo().pipe(
          map(user => AuthActions.getUserInfoSuccess({ user })),
          catchError((error: { message: string }) => of(AuthActions.getUserInfoFailure({ errorMsg: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
