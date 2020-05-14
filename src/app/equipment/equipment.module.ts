import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentDummyComponent} from './equipment-dummy/equipment-dummy.component';
import {EquipmentListComponent} from './equipment-list/equipment-list.component';
import {EquipmentComponent} from './equipment.component';
import {EquipmentDetailsComponent} from "./equipment-details/equipment-details.component";
import {EquipmentModifierPipe} from './equipment-modifier.pipe';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    EquipmentDummyComponent,
    EquipmentListComponent,
    EquipmentDetailsComponent,
    EquipmentComponent,
    EquipmentModifierPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [EquipmentComponent]
})
export class EquipmentModule {
}
