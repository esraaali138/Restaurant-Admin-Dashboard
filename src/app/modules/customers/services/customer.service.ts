import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/customers';
  getCustomers() {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  addUser(newUser: Customer) {
    return this.http.post(this.apiUrl, newUser);
  }

  calc(a:number , b:number){
    return a + b
  }
}
