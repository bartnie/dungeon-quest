import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MapComponent} from "./map.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {MapNavigationComponent} from "./map-navigation/map-navigation.component";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    MapNavigationComponent
  ],
    imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [MapComponent]
})
export class MapModule {
}
