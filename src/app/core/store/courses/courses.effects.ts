import { Injectable, inject } from '@angular/core';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CoursesService } from '@services/courses/courses.service';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      exhaustMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map(course => CoursesActions.createCourseSuccess({ course })),
          catchError((error: { message: string }) =>
            of(CoursesActions.createCourseFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.updateCourse),
      exhaustMap(({ id, course }) =>
        this.coursesService.updateCourse(id, course).pipe(
          map(course => CoursesActions.updateCourseSuccess({ id, course })),
          catchError((error: { message: string }) =>
            of(CoursesActions.updateCourseFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.removeCourse),
      exhaustMap(({ id }) =>
        this.coursesService.removeCourse(id).pipe(
          map(() => CoursesActions.removeCourseSuccess({ id })),
          catchError((error: { message: string }) =>
            of(CoursesActions.removeCourseFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private coursesService: CoursesService) {}
}

export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(CoursesActions.createCourseFailure),
      tap(({ errorMsg }) => alert(errorMsg))
    );
  },
  { functional: true, dispatch: false }
);
