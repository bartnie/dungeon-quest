import {Component} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './battle-loss-info.component.html',
  styleUrls: ['./battle-loss-info.component.scss']
})
export class BattleLossInfoComponent {
  constructor(private dungeonService: DungeonService, private router: Router) {
  }


  onGoToTavern() {
    this.router.navigate(['tavern']);
  }
}
