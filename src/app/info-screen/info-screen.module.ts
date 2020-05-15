import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BattleWinInfoComponent} from "./battle-win-info/battle-win-info.component";
import {BattleLossInfoComponent} from "./battle-loss-info/battle-loss-info.component";
import {EmptyNameInfoComponent} from "./empty-name-info/empty-name-info.component";
import {FormsModule} from "@angular/forms";
import {GameFinishedInfoComponent} from "./game-finished-info/game-finished-info.component";

@NgModule({
  declarations: [
    BattleWinInfoComponent,
    BattleLossInfoComponent,
    EmptyNameInfoComponent,
    GameFinishedInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BattleWinInfoComponent,
    BattleLossInfoComponent,
    EmptyNameInfoComponent,
    GameFinishedInfoComponent
  ]
})
export class InfoScreenModule {
}
