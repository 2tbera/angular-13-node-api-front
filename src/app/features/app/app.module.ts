import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from '../../routing/routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { REDUCERS } from "../../store";
import { AuthGuard } from "../../core/guards";
import { AuthEffect } from "../../store/auth/effects/auth.effect";
import { AuthHttpService } from "../../store/auth/services/authHttp";
import { MyInfoHttpService } from "../../store/my-info/services/my-infoHttp";
import { MyDataEffect } from "../../store/my-info/effects/my-info.effect";

const IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot([AuthEffect, MyDataEffect]),
    StoreDevtoolsModule.instrument({}),
];

const DECLARATIONS = [
    AppComponent
];

const SERVICES: any[] = [
    AuthGuard,
    MyInfoHttpService,
    AuthHttpService
];

@NgModule({
    declarations: DECLARATIONS,
    imports: IMPORTS,
    providers: SERVICES,
    bootstrap: DECLARATIONS
})
export class AppModule {
}
