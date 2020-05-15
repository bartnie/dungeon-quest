import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BattleWinInfoComponent} from "./battle-win-info/battle-win-info.component";
import {BattleLossInfoComponent} from "./battle-loss-info/battle-loss-info.component";

@NgModule({
  declarations: [
    BattleWinInfoComponent,
    BattleLossInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BattleWinInfoComponent,
    BattleLossInfoComponent
  ]
})
export class InfoScreenModule {
}
