import { Injectable, inject } from '@angular/core';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CoursesService } from '@services/courses/courses.service';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  set$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.setCourses),
      exhaustMap(() =>
        this.coursesService.getCourses().pipe(
          map(courses => CoursesActions.setCoursesSuccess({ courses })),
          catchError((error: { message: string }) => of(CoursesActions.setCoursesFailure({ errorMsg: error.message })))
        )
      )
    )
  );

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.getCourse),
      exhaustMap(({ id }) =>
        this.coursesService.getCourseById(id).pipe(
          map(course => CoursesActions.getCourseSuccess({ course })),
          catchError((error: { message: string }) => of(CoursesActions.getCourseFailure({ errorMsg: error.message })))
        )
      )
    )
  );

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

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadMoreCourses),
      exhaustMap(({ amount }) =>
        this.coursesService.loadMoreCourses(amount).pipe(
          map(courses => CoursesActions.loadMoreCoursesSuccess({ courses })),
          catchError((error: { message: string }) =>
            of(CoursesActions.loadMoreCoursesFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  );

  sort$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.sortCourses),
      exhaustMap(({ value }) =>
        this.coursesService.orderCourses(value).pipe(
          map(courses => CoursesActions.sortCoursesSuccess({ courses })),
          catchError((error: { message: string }) => of(CoursesActions.sortCoursesFailure({ errorMsg: error.message })))
        )
      )
    )
  );

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.searchCourses),
      exhaustMap(({ newValue }) =>
        this.coursesService.searchCourse(newValue).pipe(
          map(courses => CoursesActions.searchCoursesSuccess({ courses })),
          catchError((error: { message: string }) =>
            of(CoursesActions.searchCoursesFailure({ errorMsg: error.message }))
          )
        )
      )
    )
  );

  setAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.setAuthorList),
      exhaustMap(() =>
        this.coursesService.getAuthorList().pipe(
          map(authors => CoursesActions.setAuthorListSuccess({ authors })),
          catchError((error: { message: string }) => of(CoursesActions.setCoursesFailure({ errorMsg: error.message })))
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
