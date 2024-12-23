import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  isToggled: boolean = false;
  showLayout = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/user/signup' || '/user/login') this.showLayout = false;
        else this.showLayout = true;
      }
    });
  }
  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
