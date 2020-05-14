import {Component} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";

@Component({
  selector: 'app-dungeon-controls',
  templateUrl: './dungeon-controls.component.html',
  styleUrls: ['./dungeon-controls.component.scss']
})
export class DungeonControlsComponent {


  constructor(private dungeonService: DungeonService) {
  }

  onDefaultAttack() {
    this.dungeonService.nextTurn();
  }

}
