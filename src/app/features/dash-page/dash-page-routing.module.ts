import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashPageComponent } from "./dash-page.component";
import { AlbumHolderComponent } from "./layout/album-holder/album-holder.component";


const DashRoute: Routes = [
  {
    path: '',
    component: DashPageComponent,
    children: [
      {
        path: ':id',
        component: AlbumHolderComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashRoute)],
  exports: [RouterModule],
})
export class DashRouteModule {}
