import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashPageComponent } from "./dash-page.component";


const DashRoute: Routes = [
  {
    path: '',
    component: DashPageComponent,
    children: [
      {
        path: ':id',
        component: DashPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashRoute)],
  exports: [RouterModule],
})
export class DashRouteModule {}
