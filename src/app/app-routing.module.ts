import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingComponent} from "./training/training.component";
import {TavernComponent} from "./tavern/tavern.component";
import {MenuComponent} from "./menu/menu.component";
import {DungeonComponent} from "./dungeon/dungeon.component";
import {BattleWinInfoComponent} from "./info-screen/battle-win-info/battle-win-info.component";
import {BattleLossInfoComponent} from "./info-screen/battle-loss-info/battle-loss-info.component";
import {EmptyNameInfoComponent} from "./info-screen/empty-name-info/empty-name-info.component";
import {EmptyNameGuard} from "./shared/empty-name.guard";
import {GameFinishedInfoComponent} from "./info-screen/game-finished-info/game-finished-info.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {path: 'equipment', component: MenuComponent, canActivate: [EmptyNameGuard]},
  {path: 'dungeon/:dungeonType', component: DungeonComponent, canActivate: [EmptyNameGuard]},
  {path: 'tavern', component: TavernComponent, canActivate: [EmptyNameGuard]},
  {path: 'training', component: TrainingComponent, canActivate: [EmptyNameGuard]},
  {path: 'map', component: MapComponent, canActivate: [EmptyNameGuard]},
  {path: 'battle-win/:dungeonType', component: BattleWinInfoComponent, canActivate: [EmptyNameGuard]},
  {path: 'battle-loss', component: BattleLossInfoComponent, canActivate: [EmptyNameGuard]},
  {path: 'the-end', component: GameFinishedInfoComponent, canActivate: [EmptyNameGuard]},
  {path: 'name', component: EmptyNameInfoComponent},
  {path: '', redirectTo: 'map', pathMatch: 'full'},
  {path: '**', redirectTo: 'map'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
