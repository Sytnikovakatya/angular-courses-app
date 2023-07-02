import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';

import { BreadcrumbModule } from 'xng-breadcrumb';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, AppRoutingModule, BreadcrumbModule],
  exports: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
