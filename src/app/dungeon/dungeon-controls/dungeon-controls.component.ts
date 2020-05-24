import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AttackType} from "../../shared/domain/hero/attack-type.enum";
import {BattleInfoService} from "../../shared/battle-info.service";
import {BattleInfoType} from "../../shared/domain/battle-info/battle-info-type.enum";
import {BattleInfoModel} from "../../shared/domain/battle-info/battle-info.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BattleSettings} from "../../constants/battle.settings";
import {BattleMechanicsService} from "../../shared/battle-mechanics.service";
import {DungeonType} from "../../shared/domain/enemy/dungeon-type.enum";


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
  @Input() dungeonType: DungeonType;


  constructor(private battleMechanicsService: BattleMechanicsService, private battleInfoService: BattleInfoService) {
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
    this.battleMechanicsService.nextTurn(this.dungeonType, attackType);
  }
}
