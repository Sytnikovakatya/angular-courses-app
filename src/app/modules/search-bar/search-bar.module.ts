import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
