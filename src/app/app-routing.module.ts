import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'dashboard', component : DashboardContentComponent,
  },
  {
    path:'user' , loadChildren:()=> import('./modules/user-profile/user-profile-routing.module').then(m=>m.UserProfileRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
