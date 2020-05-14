import {NgModule} from "@angular/core";
import {TavernComponent} from "./tavern.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TavernComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TavernComponent
  ]
})
export class TavernModule {
}
