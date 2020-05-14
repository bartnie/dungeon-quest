import {NgModule} from "@angular/core";
import {DungeonComponent} from "./dungeon.component";
import {DungeonEnemyComponent} from "./dungeon-enemy/dungeon-enemy.component";
import {CommonModule} from "@angular/common";
import { DungeonControlsComponent } from './dungeon-controls/dungeon-controls.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    DungeonComponent,
    DungeonEnemyComponent,
    DungeonControlsComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    DungeonComponent,
    DungeonEnemyComponent
  ]
})
export class DungeonModule {
}
