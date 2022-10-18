import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthPageComponent } from "./auth-page.component";
import { AuthFormComponent } from "./layout/auth-form/auth-form.component";
import { RegistrationFormComponent } from "./layout/registration-form/registration-form.component";


const AuthRoute: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        component: AuthFormComponent
      },
      {
        path: 'registration',
        component: RegistrationFormComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoute)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
