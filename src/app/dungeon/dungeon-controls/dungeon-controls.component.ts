import {Component} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {AttackType} from "../../shared/domain/hero/attack-type.enum";

@Component({
  selector: 'app-dungeon-controls',
  templateUrl: './dungeon-controls.component.html',
  styleUrls: ['./dungeon-controls.component.scss']
})
export class DungeonControlsComponent {
  private attackType = AttackType;


  constructor(private dungeonService: DungeonService) {
  }

  onAttack(attackType: AttackType) {
    this.dungeonService.nextTurn(attackType);
  }
}
