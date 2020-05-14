import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingComponent} from "./training/training.component";
import {TavernComponent} from "./tavern/tavern.component";
import {MenuComponent} from "./menu/menu.component";
import {DungeonComponent} from "./dungeon/dungeon.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'dungeon', component: DungeonComponent},
  {path: 'tavern', component: TavernComponent},
  {path: 'training', component: TrainingComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
