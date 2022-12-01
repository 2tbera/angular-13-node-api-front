import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { DialogAddAlbumDialog, DashPageComponent } from './dash-page.component';
import { DashRouteModule } from "./dash-page-routing.module";
import { CardModule } from "../../modules/card/card.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { AlbumHolderComponent, DialogAddMusicDialog } from "./layout/album-holder/album-holder.component";

const IMPORTS = [
  CommonModule,
  CardModule,
  DashRouteModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,

  ReactiveFormsModule,
  FormsModule
];

const DECLARATIONS = [
  DashPageComponent,
  DialogAddAlbumDialog,
  AlbumHolderComponent,
  DialogAddMusicDialog
];

const SERVICES: any[] = [];

@NgModule({
  declarations: DECLARATIONS,
  imports:IMPORTS,
  providers: SERVICES
})
export class DashPageModule {
}
