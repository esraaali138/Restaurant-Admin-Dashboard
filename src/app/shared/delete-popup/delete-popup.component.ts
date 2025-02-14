import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: 'delete-popup.component.css',
  standalone: false,
})
export class DeletePopupComponent {
  @Input() isDelete = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeModel() {
    this.close.emit();
  }
}
