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
}
