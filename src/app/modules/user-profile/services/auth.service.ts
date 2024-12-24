import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

Injectable({
  providedIn: 'root',
});

export class AuthService {
  private fackJwtToken = 'fake-jwt-token';

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
  isAuthenticated(): boolean {
    return localStorage.getItem('jwt') === this.fackJwtToken;
  }
  logOut(): void {
    localStorage.removeItem('jwt');
  }
}
