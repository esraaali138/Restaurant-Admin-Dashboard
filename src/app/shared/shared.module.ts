import { NgModule } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
@NgModule({
  declarations: [InputFieldComponent, DeletePopupComponent],
  imports: [FormsModule, CommonModule],
  providers: [],
  exports: [InputFieldComponent, DeletePopupComponent]
})
export class ShardModule {}
