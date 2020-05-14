import {Component} from "@angular/core";
import {DungeonService} from "../shared/dungeon.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";
import {HeroService} from "../shared/hero.service";

@Component({
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.scss']
})
export class DungeonComponent {
  statusBarType = StatusBarType;

  constructor(private dungeonService: DungeonService, private heroService: HeroService) {
  }

}
