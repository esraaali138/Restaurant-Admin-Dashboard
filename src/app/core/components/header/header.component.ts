import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  @Input() sideBarToggled!: boolean;
  isAuthenticated: boolean = false;
  parsedData: any;
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticatedUser();
    const userDetails: any = localStorage.getItem('userData');
    this.parsedData = JSON.parse(userDetails);
  }

  logOut() {
    this.authService.logOut();
    this.isAuthenticated = false;
  }
}
