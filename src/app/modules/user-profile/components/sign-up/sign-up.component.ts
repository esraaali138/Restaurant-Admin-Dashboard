import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,

  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router, private authService: AuthService) {}
  user = {
    name: '',
    email: '',
    password: '',
  };
  onSubmit() {
    console.log('submit');

    const user = this.authService.signUp(
      this.user.name,
      this.user.email,
      this.user.password
    );
    if (user) {
      console.log('user', user);

      this.router.navigateByUrl('/user/login');
    }
  }
  navigateToLogin() {
    this.router.navigateByUrl('/user/login');
  }
}
