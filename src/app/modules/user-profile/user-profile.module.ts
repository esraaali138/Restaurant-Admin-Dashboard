import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
@NgModule({
  declarations: [SignUpComponent, ProfileComponent, LogInComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  exports:[LogInComponent]
})
export class UserProfileModule {}
