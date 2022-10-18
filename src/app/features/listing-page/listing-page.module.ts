import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { ListingPageComponent } from './listing-page.component';
import { CalendarRoutingModule } from "./listing-page-routing.module";
import { CardModule } from "../../modules/card/card.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "../../modules/file-upload/file-upload.module";

const IMPORTS = [
  CommonModule,
  CardModule,
  CalendarRoutingModule,
  MatInputModule,
  MatIconModule,

  ReactiveFormsModule,
  FormsModule,
  FileUploadModule
];

const DECLARATIONS = [
  ListingPageComponent,
];

const SERVICES: any[] = [];

@NgModule({
  declarations: DECLARATIONS,
  imports:IMPORTS,
  providers: SERVICES
})
export class ListingPageModule {
}
