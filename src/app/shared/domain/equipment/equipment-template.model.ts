import {SlotType} from "./slot-type.enum";
import {EquipmentRarityType} from "./equipment-rarity-type.enum";
import {Range} from "../util/range.model";

export interface EquipmentTemplate {
  slotType: SlotType,
  baseRarity: EquipmentRarityType,

  health: Range;
  stamina: Range;
  offence: Range;
  defence: Range;
  armor: Range;
  damage: Range;
  value: Range;

  imagePath: string;
}
