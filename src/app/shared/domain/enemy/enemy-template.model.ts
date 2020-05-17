import {EquipmentTypeProbability} from "../equipment/equipment-probability.model";
import {Range} from "../util/range.model";

export interface EnemyTemplate {
  health: Range;
  offence: Range;
  defence: Range;
  armor: Range;
  damage: Range;
  gold: Range;

  equipmentProbabilities: EquipmentTypeProbability[];
  maxEquipmentDropped: number;

  imagePath: string;
}
