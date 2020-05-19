import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MapComponent} from "./map.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {MapNavigationComponent} from "./map-navigation/map-navigation.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    MapNavigationComponent
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [MapComponent]
})
export class MapModule {
}
