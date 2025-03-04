import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderComponent } from './components/header/header.component';
import { AccordionModule } from 'primeng/accordion';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    DashboardContentComponent,
    HeaderComponent,
    MainContentComponent,
    
  ],
  imports: [CommonModule, AccordionModule , RouterModule],
  providers: [AuthGuard, AuthService],
  exports: [SidebarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in AppModule only.'
      );
    }
  }
}
