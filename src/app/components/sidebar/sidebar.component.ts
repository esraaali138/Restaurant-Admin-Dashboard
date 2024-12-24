import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent  {
  isToggled: boolean = false;
  @Input() showLayout!:boolean



  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
