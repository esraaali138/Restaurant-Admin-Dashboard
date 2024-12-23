import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isToggled: boolean = false;
  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
