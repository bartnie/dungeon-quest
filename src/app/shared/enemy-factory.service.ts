import {Injectable} from '@angular/core';
import {EnemyModel} from "./domain/enemy/enemy.model";
import {EnemyType} from "./domain/enemy/enemy-type.enum";
import {EnemyTypeProbability} from "./domain/enemy/enemy-type-probability.model";
import {EnemyTemplate} from "./domain/enemy/enemy-template.model";
import {EquipmentFactoryService} from "./equipment-factory.service";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {EnemySettings} from "../constants/enemy.settings";
import {DungeonSettings} from "../constants/dungeon.settings";
import {Range} from "./domain/util/range.model";
import {DungeonType} from "./domain/enemy/dungeon-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EnemyFactoryService {

  constructor(private equipmentFactoryService: EquipmentFactoryService) {
  }

  prepareEnemy(dungeontype: DungeonType, level: number): EnemyModel {
    const enemyType = this.randomizeEnemyType(DungeonSettings.ENEMY_PROBABILITY_MAP.get(dungeontype).get(level));
    return this.prepareEnemyWithType(enemyType);
  }

  private randomizeEnemyType(probabilities: EnemyTypeProbability[]): EnemyType {
    let counter = Math.random();
    for (let probability of probabilities) {
      counter -= probability.probability;
      if (counter <= 0) {
        return probability.enemyType;
      }
    }
    return probabilities[-1].enemyType;
  }

  private prepareEnemyWithType(enemyType: EnemyType): EnemyModel {
    const enemyTemplate: EnemyTemplate = EnemySettings.ENEMY_TEMPLATES.get(enemyType);
    let itemsDropped: EquipmentModel[] = this.equipmentFactoryService.randomizeEquipments(enemyTemplate.equipmentProbabilities);
    itemsDropped = itemsDropped.slice(0, enemyTemplate.maxEquipmentDropped);

    return new EnemyModel(
      enemyType,
      null,
      enemyTemplate.imagePath,
      this.resolveRandom(enemyTemplate.health),
      this.resolveRandom(enemyTemplate.offence),
      this.resolveRandom(enemyTemplate.defence),
      this.resolveRandom(enemyTemplate.armor),
      this.resolveRandom(enemyTemplate.damage),
      this.resolveRandom(enemyTemplate.gold),
      itemsDropped
    );
  }

  private resolveRandom(range: Range) {
    return Math.round(Math.random() * (Math.abs(range.max - range.min))) + Math.min(range.min, range.max);
  }
}
