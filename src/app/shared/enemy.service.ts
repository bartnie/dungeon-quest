import {Injectable} from '@angular/core';
import {EnemyModel} from "./domain/enemy.model";
import {EnemyType} from "./domain/enemy-type.enum";
import {AppConstants} from "../app.consts";
import {EnemyTypeProbability} from "./domain/enemy-type-probability.model";
import {EnemyTemplate} from "./domain/enemy-template.model";

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  prepareEnemy(level: number): EnemyModel {
    // level -> enemyProbabilityMap<level, Map<probabilityRange, EnemyTemplate>> => EnemyTemplate -> builder EnemyModelu
    // lub
    // level -> enemyProbabilityMap<level, Map<probabilityRange, EnemyModel>> => EnemyModel, z min/max w konstruktorze i wylosowanym już na polach
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
    return new EnemyModel(
      enemyType,
      "Spooky",
      enemyTemplate.imagePath,
      this.resolveRandom(enemyTemplate.minHealth, enemyTemplate.maxHealth),
      this.resolveRandom(enemyTemplate.minOffence, enemyTemplate.maxOffence),
      this.resolveRandom(enemyTemplate.minDefence, enemyTemplate.maxDefence),
      this.resolveRandom(enemyTemplate.minArmor, enemyTemplate.maxArmor),
      this.resolveRandom(enemyTemplate.minDamage, enemyTemplate.maxDamage),
      this.resolveRandom(enemyTemplate.minGold, enemyTemplate.maxGold),
      []
    );
  }

  private resolveRandom(from: number, to: number) {
    return Math.round(Math.random() * (Math.abs(to - from))) + Math.min(from, to);
  }
}
