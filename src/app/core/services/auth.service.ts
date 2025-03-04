import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from '../../feature-modules/user-profile/models/auth-user';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeJwtToken = 'fake-jwt-token';
  constructor() {}

  signUp(user: AuthUser) {
    localStorage.setItem('userData', JSON.stringify(user));
    return of(this.fakeJwtToken);
  }

  signIn(user: AuthUser) {
    const userDetails = localStorage.getItem('userData');
    if (userDetails) {
      const parsedData = JSON.parse(userDetails);
      if (
        parsedData.email !== user.email ||
        parsedData.password !== user.password
      ) {
        throw new Error('the email or password wrong');
      }
    }

    localStorage.setItem('jwt', this.fakeJwtToken);
    return of(this.fakeJwtToken);
  }
  isAuthenticatedUser() {
    return localStorage.getItem('jwt') === this.fakeJwtToken;
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userData');
  }
}
