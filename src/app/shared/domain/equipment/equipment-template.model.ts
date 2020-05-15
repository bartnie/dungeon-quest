import {SlotType} from "./slot-type.enum";
import {EquipmentRarityType} from "./equipment-rarity-type.enum";

export interface EquipmentTemplate {
  slotType: SlotType,
  baseRarity: EquipmentRarityType,

  minHealth: number;
  maxHealth: number;

  minStamina: number;
  maxStamina: number;

  minOffence: number;
  maxOffence: number;

  minDefence: number;
  maxDefence: number;

  minArmor: number;
  maxArmor: number;

  minDamage: number;
  maxDamage: number;

  minValue: number;
  maxValue: number;

  imagePath: string;
}
