import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [SignUpComponent, LogInComponent, ProfileComponent],
  imports: [CommonModule, FormsModule],
  providers :[AuthService]
})
export class UserProfileModule {}
