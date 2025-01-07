import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddCustomerComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
