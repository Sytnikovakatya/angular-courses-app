import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { TokenInterceptor } from '@core/interceptors/token/token.interceptor';
import { ErrorInterceptor } from '@core/interceptors/error/error.interceptor';
import { NetworkInterceptor } from '@core/interceptors/network/network.interceptor';

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
    BreadcrumbModule,
    CoreModule,
    SharedModule,
    LoginModule,
    BreadcrumbsModule,
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
