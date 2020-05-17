import {Injectable} from '@angular/core';
import {EnemyModel} from "./domain/enemy/enemy.model";
import {EnemyType} from "./domain/enemy/enemy-type.enum";
import {AppConstants} from "../constants/app.consts";
import {EnemyTypeProbability} from "./domain/enemy/enemy-type-probability.model";
import {EnemyTemplate} from "./domain/enemy/enemy-template.model";
import {EquipmentFactoryService} from "./equipment-factory.service";
import {EquipmentModel} from "./domain/equipment/equipment.model";

@Injectable({
  providedIn: 'root'
})
export class EnemyFactoryService {

  constructor(private equipmentFactoryService: EquipmentFactoryService) {
  }

  prepareEnemy(level: number): EnemyModel {
    const enemyType = this.randomizeEnemyType(AppConstants.ENEMY_PROBABILITY_MAP.get(level));
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
    const enemyTemplate: EnemyTemplate = AppConstants.ENEMY_TEMPLATES.get(enemyType);
    let itemsDropped: EquipmentModel[] = this.equipmentFactoryService.randomizeEquipments(enemyTemplate.equipmentProbabilities);
    itemsDropped = itemsDropped.slice(0, enemyTemplate.maxEquipmentDropped);

    return new EnemyModel(
      enemyType,
      null,
      enemyTemplate.imagePath,
      this.resolveRandom(enemyTemplate.minHealth, enemyTemplate.maxHealth),
      this.resolveRandom(enemyTemplate.minOffence, enemyTemplate.maxOffence),
      this.resolveRandom(enemyTemplate.minDefence, enemyTemplate.maxDefence),
      this.resolveRandom(enemyTemplate.minArmor, enemyTemplate.maxArmor),
      this.resolveRandom(enemyTemplate.minDamage, enemyTemplate.maxDamage),
      this.resolveRandom(enemyTemplate.minGold, enemyTemplate.maxGold),
      itemsDropped
    );
  }

  private resolveRandom(from: number, to: number) {
    return Math.round(Math.random() * (Math.abs(to - from))) + Math.min(from, to);
  }
}
