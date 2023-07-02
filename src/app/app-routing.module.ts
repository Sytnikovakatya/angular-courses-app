import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

import { LoginComponent } from '@components/login/login/login.component';

import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
    canMatch: [authGuard],
  },
  {
    path: 'courses/:id',
    loadChildren: () => import('./modules/course-form/course-form.module').then(m => m.CourseFormModule),
  },
  {
    path: 'courses/new',
    loadChildren: () => import('./modules/course-form/course-form.module').then(m => m.CourseFormModule),
  },

  { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Courses' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
