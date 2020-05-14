import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MenuComponent} from "./menu.component";
import {SharedModule} from "../shared/shared.module";
import {EquipmentModule} from "../equipment/equipment.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EquipmentModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
