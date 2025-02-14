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

  @Input() isOpen!: boolean;
  @Output() close: EventEmitter<void> = new EventEmitter();

  newUser = {
    CustomerID: '5552338',
    CustomerName: '',
    TotalSpent: null,
    Location: '',
    LastOrder: null,
    JoinDate: '',
    selected: false,
  };

  isSubmitted = false;
  numberPattern = '^[0-9]*\\.?[0-9]*$';
  letterPattern = '^[A-Za-z]*$';

  closeModel() {
    this.isSubmitted = false;
    this.close.emit();
  }

  addUser(form: any) {
    this.isSubmitted = true;
    console.log('Form Valid:', form.valid);

    if (
      form.valid &&
      this.newUser.CustomerName &&
      this.newUser.LastOrder &&
      this.newUser.TotalSpent &&
      this.newUser.Location
    ) {
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
    } else return;
  }
}
 