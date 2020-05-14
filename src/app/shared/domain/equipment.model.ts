import {EquipmentType} from "./equipment-type.enum";
import {ModifierModel} from "./modifier.model";

export class EquipmentModel {
  constructor(public equipmentType: EquipmentType,
              public name: string,
              public modifiers: ModifierModel[],
              public value: number,
              public imagePath: string) {
  }
}
