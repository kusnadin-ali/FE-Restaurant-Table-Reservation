import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './general/guard/auth.guard';
import { NoAuthGuard } from './general/guard/no-auth.guard';
import { ListUserComponent } from './pages/users/list-user/list-user.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NoAuthGuard],

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-user/restaurant',
    component: ListUserComponent
  },
  {
    path: 'list-user/customer',
    component: ListUserComponent
  }
];
