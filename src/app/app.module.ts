import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

import { TokenInterceptor } from '@interceptors/token/token.interceptor';
import { ErrorInterceptor } from '@interceptors/error/error.interceptor';
import { NetworkInterceptor } from '@interceptors/network/network.interceptor';

import { authReducer } from '@store/authentication/auth.reducer';
import { coursesReducer } from '@store/courses/courses.reducer';
import { AuthEffects } from '@store/authentication/auth.effects';
import { CoursesEffects } from '@store/courses/courses.effects';

import { LoginModule } from '@components/login/login.module';
import { BreadcrumbsModule } from '@components/breadcrumbs/breadcrumbs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CoreModule,
    SharedModule,
    LoginModule,
    BreadcrumbsModule,
    StoreModule.forRoot({ courses: coursesReducer, auth: authReducer }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    BreadcrumbService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
