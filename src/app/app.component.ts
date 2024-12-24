import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Restaurant-Admin-Dashboard';
  showLayout = true;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      // console.log('event',event);

      if (event instanceof NavigationEnd) {
        console.log('event', event);

        const currentRoute = event.urlAfterRedirects;

        if (
          currentRoute.includes('/user/signup') ||
          currentRoute.includes('/user/login')
        )
          this.showLayout = false;
        else this.showLayout = true;
      }
    });
  }
}
