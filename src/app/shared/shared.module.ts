import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as SharedComponents from './components';
@NgModule({
  declarations: [
    SharedComponents.DeletePopupComponent,
    SharedComponents.InputFieldComponent,
  ],
  imports: [FormsModule, CommonModule],
  exports: [
    SharedComponents.DeletePopupComponent,
    SharedComponents.InputFieldComponent
  ],
})
export class ShardModule {}
