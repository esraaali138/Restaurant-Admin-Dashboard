import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: false,
  
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
    constructor(private router:Router){}
  
  user = {
    email: '',
    password: ''
  };
  onSubmit(){
    
  }
  navigateToSign(){
    this.router.navigateByUrl("/user/signup")
  }
}
