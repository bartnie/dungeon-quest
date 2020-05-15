import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BattleWinInfoComponent} from "./battle-win-info/battle-win-info.component";
import {BattleLossInfoComponent} from "./battle-loss-info/battle-loss-info.component";
import {EmptyNameInfoComponent} from "./empty-name-info/empty-name-info.component";

@NgModule({
  declarations: [
    BattleWinInfoComponent,
    BattleLossInfoComponent,
    EmptyNameInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BattleWinInfoComponent,
    BattleLossInfoComponent,
    EmptyNameInfoComponent
  ]
})
export class InfoScreenModule {
}
