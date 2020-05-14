import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterStatsComponent} from "./character-stats/character-stats.component";
import {RepeatDirective} from "./repeat-directive/repeat.directive";
import {CharacterGoldComponent} from "./character-gold/character-gold.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";

@NgModule({
  declarations: [
    CharacterStatsComponent,
    CharacterGoldComponent,
    StatusBarComponent,
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterStatsComponent,
    StatusBarComponent,
    RepeatDirective,
    CharacterGoldComponent
  ]
})
export class SharedModule {
}
