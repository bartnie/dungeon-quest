import {Component, OnDestroy, OnInit} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {AttackType} from "../../shared/domain/hero/attack-type.enum";
import {BattleInfoService} from "../../shared/battle-info.service";
import {BattleInfoType} from "../../shared/domain/battle-info/battle-info-type.enum";
import {BattleInfoModel} from "../../shared/domain/battle-info/battle-info.model";


@Component({
  selector: 'app-dungeon-controls',
  templateUrl: './dungeon-controls.component.html',
  styleUrls: ['./dungeon-controls.component.scss']
})
export class DungeonControlsComponent implements OnInit, OnDestroy {
  attackType = AttackType;
  infoType = BattleInfoType;
  battleInfo: Map<BattleInfoType, BattleInfoModel>;

  constructor(private dungeonService: DungeonService, private battleInfoService: BattleInfoService) {
  }

  ngOnInit() {
    this.battleInfo = new Map<BattleInfoType, BattleInfoModel>();
    this.battleInfoService.battleInfo.subscribe(
      (battleInfo: Map<BattleInfoType, BattleInfoModel>) => this.battleInfo = battleInfo
    );
  }

  ngOnDestroy() {
    this.battleInfoService.clearBattleMessages();
  }

  onAttack(attackType: AttackType) {
    this.dungeonService.nextTurn(attackType);
  }
}
