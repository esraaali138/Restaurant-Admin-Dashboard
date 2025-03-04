import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShardModule } from '../../shared/shared.module';
import * as CustomerComponents from './components';
@NgModule({
  declarations: [
    CustomerComponents.AddCustomerComponent,
    CustomerComponents.CustomerComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ShardModule],
})
export class CustomersModule {}
