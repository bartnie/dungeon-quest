import {Injectable} from '@angular/core';
import {EquipmentTypeProbability} from "./domain/equipment/equipment-probability.model";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {EquipmentType} from "./domain/equipment/equipment-type.enum";
import {EquipmentTemplate} from "./domain/equipment/equipment-template.model";
import {ModifierModel} from "./domain/modifier/modifier.model";
import {ModifierType} from "./domain/modifier/modifier-type.enum";
import {EquipmentRarityType} from "./domain/equipment/equipment-rarity-type.enum";
import {EquipmentSettings} from "../constants/equipment.settings";
import {Range} from "./domain/util/range.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentFactoryService {

  randomizeEquipments(probabilities: EquipmentTypeProbability[]): EquipmentModel[] {
    const randomizedEquipments: EquipmentModel[] = [];
    for (let probability of probabilities) {
      if (probability.probability >= Math.random()) {
        randomizedEquipments.push(this.createEquipment(probability.equipmentType));
      }
    }
    return randomizedEquipments;
  }

  createEquipment(equipmentType: EquipmentType): EquipmentModel {
    const equipmentTemplate: EquipmentTemplate = EquipmentSettings.EQUIPMENT_TEMPLATES.get(equipmentType);
    const itemStrength = Math.random();

    let modifiers: ModifierModel[] = [];
    modifiers.push(new ModifierModel(ModifierType.HEALTH, this.resolve(equipmentTemplate.health, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.STAMINA, this.resolve(equipmentTemplate.stamina, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.OFFENCE, this.resolve(equipmentTemplate.offence, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.DEFENCE, this.resolve(equipmentTemplate.defence, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.ARMOR, this.resolve(equipmentTemplate.armor, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.DAMAGE, this.resolve(equipmentTemplate.damage, itemStrength)));
    modifiers = modifiers.filter((modifier: ModifierModel) => modifier.modifier > 0);

    const value = this.resolve(equipmentTemplate.value, itemStrength);

    const rarity: EquipmentRarityType = this.resolveRarity(equipmentTemplate.baseRarity, itemStrength);

    return new EquipmentModel(
      equipmentTemplate.slotType,
      equipmentType.toString(),
      modifiers,
      value,
      equipmentTemplate.imagePath,
      rarity
    );
  }

  private resolve(range: Range, random: number): number {
    return Math.round(random * (range.max - range.min)) + range.min;
  }

  private resolveRarity(baseRarity: EquipmentRarityType, itemStrength: number): EquipmentRarityType {
    if (itemStrength <= EquipmentSettings.INCREASE_RARITY_THRESHOLD) {
      return baseRarity;
    }
    let newRarity: EquipmentRarityType = baseRarity;
    let parsedEnumMember: number;
    for (let enumMember in EquipmentRarityType) {
      parsedEnumMember = parseInt(enumMember, 10);
      if (parsedEnumMember === baseRarity.valueOf() + 1) {
        newRarity = parsedEnumMember as EquipmentRarityType;
      }
    }
    return newRarity;
  }

}

