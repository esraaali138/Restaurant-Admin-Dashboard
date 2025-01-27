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
  openPopup!: boolean;
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

  sortDirection: { [key: string]: boolean } = {
    CustomerID: true,
    JoinDate: true,
    CustomerName: true,
    Location: true,
    TotalSpent: true,
    LastOrder: true,
  };

  sortBy(column: string): void {
    const direction = this.sortDirection[column] ? -1 : 1;
    this.customers = [...this.customers].sort((a, b) => {
      const valA = a[column] ?? '';
      const valB = b[column] ?? '';
      if (valA > valB) return direction;
      if (valA < valB) return -direction;

      return 0;
    });
    this.sortDirection[column] = !this.sortDirection[column];
  }

  openModel(): void {
    this.openPopup = true;
    document.body.style.overflow = 'hidden';
  }

  closeModel(): void {
    this.openPopup = false;
    document.body.style.overflow = 'auto';
  }
}
