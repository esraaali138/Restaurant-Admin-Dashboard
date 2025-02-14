import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { CommonModule } from '@angular/common';
import { CustomersModule } from './modules/customers/customers.module';
import { authInterceptor } from './auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardContentComponent,
    HeaderComponent,
    MainContentComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserProfileModule,
    CommonModule,
    CustomersModule,
    AccordionModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor])) , 

    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
