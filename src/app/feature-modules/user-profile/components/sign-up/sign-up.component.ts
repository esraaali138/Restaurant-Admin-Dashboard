import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { AuthUser } from '../../models/auth-user';
@Component({
  selector: 'app-sign-up',
  standalone: false,

  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router, private authService: AuthService) {}
  isSubmitted: boolean = false;
  letterPattern = '^[A-Za-z]*$';
  emailPattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/';
  user: AuthUser = {
    username: '',
    email: '',
    password: '',
  };
  signUp(form: any) {
    this.isSubmitted = true;
    if (form.invalid) return;
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
