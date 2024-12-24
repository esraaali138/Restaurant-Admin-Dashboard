import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

Injectable({
  providedIn: 'root',
});

export class AuthService {
  private fackJwtToken = 'fake-jwt-token';
  private isAuthenticated = false;
  constructor() {
    this.isAuthenticated = localStorage.getItem('jwt') === this.fackJwtToken;
  }

  signUp(userName: string, email: string, password: string): string {
    return `userName is : ${userName} with email : ${email} and password ${password} registered successfully`;
  }

  signIn(email: string, password: string): string {
    if (email === 'email' && password === 'password') {
      localStorage.setItem('jwt', this.fackJwtToken);
      return 'Sign In Successful';
    } else {
      return 'Invalid Credentials';
    }
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    this.isAuthenticated = false
  }
}
