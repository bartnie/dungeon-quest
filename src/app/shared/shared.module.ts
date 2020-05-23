import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterStatsComponent} from "./character-stats/character-stats.component";
import {RepeatDirective} from "./repeat-directive/repeat.directive";
import {CharacterGoldComponent} from "./character-gold/character-gold.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";
import {AutoFocusDirective} from "./autofocus-directive/auto-focus.directive";
import {ToMapComponent} from "./to-map/to-map.component";

@NgModule({
  declarations: [
    CharacterStatsComponent,
    CharacterGoldComponent,
    StatusBarComponent,
    RepeatDirective,
    AutoFocusDirective,
    ToMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterStatsComponent,
    StatusBarComponent,
    RepeatDirective,
    CharacterGoldComponent,
    AutoFocusDirective,
    ToMapComponent
  ]
})
export class SharedModule {
}
