import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
@NgModule({
  declarations: [AddCustomerComponent, CustomerComponent, InputFieldComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class CustomersModule {}
