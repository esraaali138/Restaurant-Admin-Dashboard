import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CustomerService } from '../../../feature-modules/customers/services/customer.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: 'delete-popup.component.css',
  standalone: false,
})
export class DeletePopupComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  @Input() isDelete = false;
  @Input() id: any;
  @Output() close: EventEmitter<void> = new EventEmitter();
  name: string = '';
  ngOnInit(): void {}

  closeModel() {
    this.close.emit();
  }

  onDelete(customerId: string) {
    this.customerService.deleteUser(customerId).subscribe({
      next: (res) => {
        this.closeModel();
      },
      error: (err) => {
        console.error('Error deleting customer:', err);
      },
    });
  }
}
