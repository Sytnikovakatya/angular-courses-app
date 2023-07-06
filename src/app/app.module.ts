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
import { TokenInterceptor } from '@services/authentication/interceptor/token.interceptor';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
