import {Component, OnDestroy, OnInit} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {AttackType} from "../../shared/domain/hero/attack-type.enum";
import {BattleInfoService} from "../../shared/battle-info.service";
import {BattleInfoType} from "../../shared/domain/battle-info/battle-info-type.enum";
import {BattleInfoModel} from "../../shared/domain/battle-info/battle-info.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BattleSettings} from "../../constants/battle.settings";


@Component({
  selector: 'app-dungeon-controls',
  templateUrl: './dungeon-controls.component.html',
  styleUrls: ['./dungeon-controls.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(500)),
    ])
  ]
})
export class DungeonControlsComponent implements OnInit, OnDestroy {
  attackType = AttackType;
  heroDamageInfo: BattleInfoModel[];
  enemyDamageInfo: BattleInfoModel[];
  maxEntries: number;


  constructor(private dungeonService: DungeonService, private battleInfoService: BattleInfoService) {
  }

  ngOnInit() {
    this.battleInfoService.battleInfo.subscribe(
      (battleInfo: BattleInfoModel[]) => {
        this.heroDamageInfo = battleInfo.filter((info: BattleInfoModel) => info.infoType === BattleInfoType.HERO_DAMAGE).reverse();
        this.enemyDamageInfo = battleInfo.filter((info: BattleInfoModel) => info.infoType === BattleInfoType.ENEMY_DAMAGE).reverse();
      }
    );
    this.maxEntries = BattleSettings.MAX_BATTLE_LOGS_ENTRIES;
  }

  ngOnDestroy() {
    this.battleInfoService.clearBattleMessages();
  }

  onAttack(attackType: AttackType) {
    this.dungeonService.nextTurn(attackType);
  }
}
