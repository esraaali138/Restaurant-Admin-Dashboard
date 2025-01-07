import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
@Component({
  selector: 'app-customer',
  standalone: false,

  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  customers!: Customer[];
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (res) => {
        console.log('res', res);

        this.customers = res;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
