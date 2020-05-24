import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {SidebarComponent} from './sidebar/sidebar.component';
import {DungeonModule} from "./dungeon/dungeon.module";
import {TavernModule} from "./tavern/tavern.module";
import {TrainingModule} from "./training/training.module";
import {MenuModule} from "./menu/menu.module";
import {InfoScreenModule} from "./info-screen/info-screen.module";
import {MapModule} from "./map/map.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    TavernModule,
    TrainingModule,
    DungeonModule,
    InfoScreenModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
