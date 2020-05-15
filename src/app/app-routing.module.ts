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

const routes: Routes = [
  {path: 'menu', component: MenuComponent, canActivate: [EmptyNameGuard]},
  {path: 'dungeon', component: DungeonComponent, canActivate: [EmptyNameGuard]},
  {path: 'tavern', component: TavernComponent, canActivate: [EmptyNameGuard]},
  {path: 'training', component: TrainingComponent, canActivate: [EmptyNameGuard]},
  {path: 'battle-win', component: BattleWinInfoComponent, canActivate: [EmptyNameGuard]},
  {path: 'battle-loss', component: BattleLossInfoComponent, canActivate: [EmptyNameGuard]},
  {path: 'name', component: EmptyNameInfoComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
