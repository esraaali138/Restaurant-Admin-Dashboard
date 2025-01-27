import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  standalone: false,

  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  constructor(private customerService: CustomerService) {}
  newUser = {
    CustomerID: '5552338',
    CustomerName: '',
    TotalSpent: null,
    Location: '',
    LastOrder: null,
    JoinDate: '',
  };

  @Input() isOpen!: boolean;
  @Output() close: EventEmitter<void> = new EventEmitter();

  submitted = false;
  closeModel() {
    this.close.emit();
  }

  addUser() {
    this.submitted = true
    const updatedCustomerID = Number(this.newUser.CustomerID) + 1;
    const newDate = new Date();
    this.newUser = {
      ...this.newUser,
      CustomerID: updatedCustomerID.toString(),
      JoinDate: formatDate(newDate, 'dd MMMM yyyy, hh:mm a', 'en-US'),
    };
    this.customerService.addUser(this.newUser).subscribe({
      next: (res) => {
        console.log('res', res);
        this.closeModel();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
