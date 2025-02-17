import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
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
  selectedAll: boolean = false;
  isDeletedPopup: boolean = false;
  selectedIndex: any;
  selectedCustomer: Customer | null = null;
  isEdit = false;
  status = '';
  showBulk = false;
  isFilter = false;
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (res) => {
        this.customers = res;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
    this.status = this.openPopup ? 'add' : 'edit';
  }

  sortDirection: { [key: string]: boolean } = {
    id: true,
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

  openModel(type: string): void {
    this.status = type;
    switch (type) {
      case 'add':
        this.openPopup = true;
        this.isEdit = false;
        this.selectedIndex = null;
        break;
      case 'edit':
        this.isEdit = true;
        this.selectedIndex = null;
        this.openPopup = false;
        break;
      case 'delete':
        this.isDeletedPopup = true;
        break;
      default:
        console.warn(`Unknown popup type: ${type}`);
        return;
    }
    document.body.style.overflow = 'hidden';
  }

  closeModel(type: string): void {
    switch (type) {
      case 'add':
        this.openPopup = false;
        break;
      case 'edit':
        this.isEdit = false;
        break;
      case 'delete':
        this.isDeletedPopup = false;
        this.selectedIndex = null;
    }
    document.body.style.overflow = 'auto';
  }

  selectAll() {
    this.customers.forEach((customer) => {
      customer.selected = this.selectedAll;
    });
  }

  showModel(index: any) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

  openBulk() {
    this.showBulk = !this.showBulk;
    this.isFilter = false;
  }
  filterby() {
    this.isFilter = !this.isFilter;
    this.showBulk = false;
  }
}
