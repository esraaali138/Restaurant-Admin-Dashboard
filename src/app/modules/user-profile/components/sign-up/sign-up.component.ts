import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthUser } from '../../models/auth-user';
@Component({
  selector: 'app-sign-up',
  standalone: false,

  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router, private authService: AuthService) {}
  user: AuthUser = {
    username: '',
    email: '',
    password: '',
  };
  signUp() {
    this.authService.signUp(this.user).subscribe({
      next: (res) => {
        this.navigateToLogin();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  navigateToLogin() {
    this.router.navigateByUrl('/user/login');
  }
}
