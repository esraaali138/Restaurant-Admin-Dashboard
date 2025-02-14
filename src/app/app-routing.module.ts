import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardContentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customers/customers-routing.module').then(
        (m) => m.CustomersRoutingModule /// see tomorow
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user-profile/user-profile-routing.module').then(
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
