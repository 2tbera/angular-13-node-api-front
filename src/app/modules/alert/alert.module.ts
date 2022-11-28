import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AlertOutletComponent} from './components/alert-outlet/alert-outlet.component';
import {AlertComponent} from './components/alert/alert.component';
import {StoreModule} from '@ngrx/store';
import {reducerAlert} from './store/reducers/alert.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    StoreModule.forFeature('alert', reducerAlert),
  ],
  exports: [
    AlertOutletComponent,
    AlertComponent,
  ],
  declarations: [
    AlertOutletComponent,
    AlertComponent,
  ],
  entryComponents: [
    AlertComponent,
    AlertOutletComponent,
  ]
})
export class AlertModule {
}
