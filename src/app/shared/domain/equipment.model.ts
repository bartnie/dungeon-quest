import {SlotType} from "./slot-type.enum";
import {ModifierModel} from "./modifier.model";
import {EquipmentRarityType} from "./equipment-rarity-type.enum";

export class EquipmentModel {
  constructor(public slotType: SlotType,
              public name: string,
              public modifiers: ModifierModel[],
              public value: number,
              public imagePath: string,
              public rarity: EquipmentRarityType) {
  }
}
