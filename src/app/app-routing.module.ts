import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) },
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
