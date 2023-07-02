import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { RoutePaths } from '@shared/enums/route-paths';

import { LoginComponent } from '@components/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: RoutePaths.Login, component: LoginComponent },
  {
    path: RoutePaths.Courses,
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
    canMatch: [authGuard],
  },
  {
    path: RoutePaths.EditCourse,
    loadChildren: () => import('./modules/course-form/course-form.module').then(m => m.CourseFormModule),
  },
  {
    path: RoutePaths.NewCourse,
    loadChildren: () => import('./modules/course-form/course-form.module').then(m => m.CourseFormModule),
  },

  { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Courses' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
