import { DashboardContentComponent } from './core/components/dashboard-content/dashboard-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardContentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./feature-modules/customers/customers-routing.module').then(
        (m) => m.CustomersRoutingModule /// see tomorow
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./feature-modules/user-profile/user-profile-routing.module').then(
        (m) => m.UserProfileRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard', //will be 404
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
