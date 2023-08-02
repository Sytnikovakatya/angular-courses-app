import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { HighlightDirective } from './directives/hightlight/highlight.directive';
import { IfAuthenticatedDirective } from './directives/ifAuthenticated/if-authenticated.directive';

import { DurationPipe } from './pipes/duration/duration.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    LogoComponent,
    HighlightDirective,
    IfAuthenticatedDirective,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    ButtonComponent,
    InputComponent,
    LogoComponent,
    HighlightDirective,
    IfAuthenticatedDirective,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
  ],
})
export class SharedModule {}
