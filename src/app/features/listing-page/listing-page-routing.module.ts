import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListingPageComponent } from "./listing-page.component";


const CalendarRoute: Routes = [
  {
    path: '',
    component: ListingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(CalendarRoute)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
