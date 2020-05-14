import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from './header/header.component';
import {EquipmentModule} from "./equipment/equipment.module";
import {DungeonModule} from "./dungeon/dungeon.module";
import {TavernModule} from "./tavern/tavern.module";
import {TrainingModule} from "./training/training.module";
import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    TavernModule,
    TrainingModule,
    DungeonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
