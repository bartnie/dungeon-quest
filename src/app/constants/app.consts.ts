import {EnemyType} from "../shared/domain/enemy/enemy-type.enum";
import {EnemyTypeProbability} from "../shared/domain/enemy/enemy-type-probability.model";
import {EnemyTemplate} from "../shared/domain/enemy/enemy-template.model";
import {EquipmentTemplate} from "../shared/domain/equipment/equipment-template.model";
import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {EquipmentRarityType} from "../shared/domain/equipment/equipment-rarity-type.enum";
import {SlotType} from "../shared/domain/equipment/slot-type.enum";

export class AppConstants {

  public static OFFENCE_DEFENCE_BONUS_COEFFICIENT = 0.1;
  public static VALUES_DIGIT_PRECISION = 0.1;
  public static DAMAGE_MULTIPLIER_DIGIT_PRECISION = 0.01;

  public static MAX_BATTLE_LOGS_ENTRIES = 5;

  public static MAX_DUNGEON_LEVEL = 13;

  public static ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [new EnemyTypeProbability( 1,  EnemyType.TROGLODYTE)]],
    [2, [new EnemyTypeProbability(1,  EnemyType.TROGLODYTE)]],
    [3, [new EnemyTypeProbability(1,  EnemyType.TROGLODYTE)]],
    [4, [new EnemyTypeProbability(0.8,  EnemyType.TROGLODYTE), new EnemyTypeProbability( 0.2,  EnemyType.BEHEMOT)]],
    [5, [new EnemyTypeProbability(0.6,  EnemyType.TROGLODYTE), new EnemyTypeProbability( 0.4,  EnemyType.BEHEMOT)]],
    [6, [new EnemyTypeProbability(0.6,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.3,  EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [7, [new EnemyTypeProbability(0.8,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.1,  EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [8, [new EnemyTypeProbability(0.8,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.2,  EnemyType.DRAGON)]],
    [9, [new EnemyTypeProbability(0.6,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.4,  EnemyType.DRAGON)]],
    [10, [new EnemyTypeProbability(0.6,  EnemyType.DRAGON), new EnemyTypeProbability( 0.4,  EnemyType.BEHEMOT)]],
    [11, [new EnemyTypeProbability(0.8,  EnemyType.DRAGON), new EnemyTypeProbability( 0.2,  EnemyType.BEHEMOT)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [13, [new EnemyTypeProbability(1,  EnemyType.BOSS)]]
  ]);
}
