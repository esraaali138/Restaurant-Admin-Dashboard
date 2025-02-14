import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShardModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AddCustomerComponent, CustomerComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ShardModule],
})
export class CustomersModule {}
