import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardComponent } from './card.component';

const IMPORTS = [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule
];

const DECLARATIONS = [
  CardComponent
];

const SERVICES: any[] = [];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: SERVICES,
  exports: DECLARATIONS
})
export class CardModule {
}
