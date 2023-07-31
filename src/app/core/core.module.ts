import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoadingBlockComponent],
  imports: [CommonModule, SharedModule, NgbModule, TranslateModule],
  exports: [FooterComponent, HeaderComponent, LoadingBlockComponent],
})
export class CoreModule {}
