import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { AuthUser } from '../../models/auth-user';

@Component({
  selector: 'app-log-in',
  standalone: false,

  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  constructor(private router: Router, private authService: AuthService) {}
  user: AuthUser = {
    username: '',
    email: '',
    password: '',
  };

  login() {
    this.authService.signIn(this.user).subscribe({
      next: (res) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  navigateToSign() {
    this.router.navigateByUrl('/user/signup');
  }
}
