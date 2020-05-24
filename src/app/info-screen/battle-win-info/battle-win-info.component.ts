import {Component, OnDestroy, OnInit} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {EnemyModel} from "../../shared/domain/enemy/enemy.model";
import {ActivatedRoute} from "@angular/router";
import {EquipmentRarityType} from "../../shared/domain/equipment/equipment-rarity-type.enum";
import {DungeonType} from "../../shared/domain/enemy/dungeon-type.enum";
import {RoutingService} from "../../shared/routing.service";

@Component({
  templateUrl: './battle-win-info.component.html',
  styleUrls: ['./battle-win-info.component.scss']
})
export class BattleWinInfoComponent implements OnInit, OnDestroy {
  defeatedEnemy: EnemyModel;
  RARITY_TYPE = EquipmentRarityType;
  private dungeonType: DungeonType;
  private componentActive: boolean;

  constructor(private dungeonService: DungeonService, private routingService: RoutingService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.componentActive = true;
    const dungeonTypeParam: number = +this.route.snapshot.params['dungeonType'];
    this.dungeonType = this.parseEnum(dungeonTypeParam);

    this.dungeonService.oldEnemies.get(this.dungeonType).subscribe(
      (enemy: EnemyModel) => this.defeatedEnemy = enemy
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onGoToDungeon() {
    this.routingService.goToDungeon(this.dungeonType);
  }

  private parseEnum(enumValue: number): DungeonType {
    let parsedEnumMember: number;
    for (let enumMember in DungeonType) {
      parsedEnumMember = parseInt(enumMember, 10);
      if (parsedEnumMember === enumValue) {
        return parsedEnumMember as DungeonType;
      }
    }
    throw new Error(`${enumValue} is not a proper enum value.`);
  }
}
