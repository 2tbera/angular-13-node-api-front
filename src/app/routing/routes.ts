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
    loadChildren: () => import('../features/listing-page/listing-page.module').then(m => m.ListingPageModule)
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: ''
  // },
];
