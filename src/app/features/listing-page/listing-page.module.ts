import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { DialogAddAlbumDialog, ListingPageComponent } from './listing-page.component';
import { CalendarRoutingModule } from "./listing-page-routing.module";
import { CardModule } from "../../modules/card/card.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

const IMPORTS = [
  CommonModule,
  CardModule,
  CalendarRoutingModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,

  ReactiveFormsModule,
  FormsModule,

];

const DECLARATIONS = [
  ListingPageComponent,
  DialogAddAlbumDialog,
];

const SERVICES: any[] = [];

@NgModule({
  declarations: DECLARATIONS,
  imports:IMPORTS,
  providers: SERVICES
})
export class ListingPageModule {
}
