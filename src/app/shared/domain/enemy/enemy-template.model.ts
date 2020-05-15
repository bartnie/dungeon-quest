import {EquipmentTypeProbability} from "../equipment/equipment-probability.model";

export interface EnemyTemplate {
  minHealth: number;
  maxHealth: number;

  minOffence: number;
  maxOffence: number;
  minDefence: number;
  maxDefence: number;

  minArmor: number;
  maxArmor: number;

  minDamage: number;
  maxDamage: number;

  minGold: number;
  maxGold: number;

  equipmentProbabilities: EquipmentTypeProbability[];
  maxEquipmentDropped: number;

  imagePath: string;
}
