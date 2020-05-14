import {Injectable} from '@angular/core';
import {EnemyModel} from "./domain/enemy.model";
import {EnemyType} from "./domain/enemy-type.enum";
import {EquipmentModel} from "./domain/equipment.model";
import {EquipmentType} from "./domain/equipment-type.enum";
import {ModifierType} from "./domain/modifier-type.enum";
import {ModifierModel} from "./domain/modifier.model";
import {AppConstants} from "../app.consts";
import {EnemyTypeProbability} from "./domain/enemy-type-probability.model";

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  prepareEnemy(level: number) {
    // level -> enemyProbabilityMap<level, Map<probabilityRange, EnemyTemplate>> => EnemyTemplate -> builder EnemyModelu
    // lub
    // level -> enemyProbabilityMap<level, Map<probabilityRange, EnemyModel>> => EnemyModel, z min/max w konstruktorze i wylosowanym już na polach
    let enemyType = this.randomizeEnemyType(AppConstants.ENEMY_PROBABILITY_MAP.get(level));
    return new EnemyModel(EnemyType.BEHEMOT,
      "Spooky",
      "https://www.wykop.pl/cdn/c3201142/comment_zvjbKR43H2YtrRJ1ArDAMI2QAuRRycfk.gif",
      10,
      2,
      6,
      2,
      2,
      35,
      [
        new EquipmentModel(
          EquipmentType.WEAPON,
          "Great Sword",
          [new ModifierModel(ModifierType.DAMAGE,
            5)],
          120,
          "https://www.militaria.pl/upload/wysiwyg/gfx/produkty/noze/ColdSteel/88HNH/Miecz_Cold_Steel_Hand_and_a_Half_Sword_88HNH-112.jpg")
      ],
    );
  }

  randomizeEnemyType(probabilities: EnemyTypeProbability[]) {
    let counter = Math.random();
    for (let probability of probabilities) {
      counter -= probability.probability;
      if (counter <= 0) {
        return probability.enemyType;
      }
    }
    return probabilities[-1];
  }
}
