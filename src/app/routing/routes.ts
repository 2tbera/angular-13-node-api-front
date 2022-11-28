import { Routes } from '@angular/router';
import { AuthGuard } from "../core/guards";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../features/auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('../features/dash-page/dash-page.module').then(m => m.DashPageModule)
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: ''
  // },
];
