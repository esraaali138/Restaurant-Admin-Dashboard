import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ShardModule } from '../../shared/shared.module';
import * as UserProfileComponents from './components';
@NgModule({
  declarations: [
    UserProfileComponents.LogInComponent,
    UserProfileComponents.ProfileComponent,
    UserProfileComponents.SignUpComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, ShardModule],
  providers: [AuthService],
  exports: [UserProfileComponents.LogInComponent],
})
export class UserProfileModule {}
