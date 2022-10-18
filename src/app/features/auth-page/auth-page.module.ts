import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { AuthPageComponent } from './auth-page.component';
import { AuthRoutingModule } from "./auth-page-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from "./layout/registration-form/registration-form.component";
import { AuthFormComponent } from "./layout/auth-form/auth-form.component";

const IMPORTS = [
  CommonModule,
  AuthRoutingModule,

  MatInputModule,
  MatIconModule,

  ReactiveFormsModule,
  FormsModule,
];

const DECLARATIONS = [
  AuthPageComponent,
  AuthFormComponent,
  RegistrationFormComponent
];

const SERVICES: any[] = [];

@NgModule({
  declarations: DECLARATIONS,
  imports:IMPORTS,
  providers: SERVICES
})
export class AuthPageModule {
}
