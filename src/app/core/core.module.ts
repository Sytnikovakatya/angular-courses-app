import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
