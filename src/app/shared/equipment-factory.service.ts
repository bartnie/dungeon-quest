import {Injectable} from '@angular/core';
import {AppConstants} from "../app.consts";
import {EquipmentTypeProbability} from "./domain/equipment/equipment-probability.model";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {EquipmentType} from "./domain/equipment/equipment-type.enum";
import {EquipmentTemplate} from "./domain/equipment/equipment-template.model";
import {ModifierModel} from "./domain/modifier/modifier.model";
import {ModifierType} from "./domain/modifier/modifier-type.enum";
import {EquipmentRarityType} from "./domain/equipment/equipment-rarity-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EquipmentFactoryService {

  randomizeEquipments(probabilities: EquipmentTypeProbability[]): EquipmentModel[] {
    const randomizedEquipments: EquipmentModel[] = [];
    for (let probability of probabilities) {
      if (probability.probability <= Math.random()) {
        randomizedEquipments.push(this.createEquipment(probability.equipmentType));
      }
    }
    return randomizedEquipments;
  }

  private createEquipment(equipmentType: EquipmentType): EquipmentModel {
    const equipmentTemplate: EquipmentTemplate = AppConstants.EQUIPMENT_TEMPLATES.get(equipmentType);
    const itemStrength = Math.random();

    const modifiers: ModifierModel[] = [];
    modifiers.push(new ModifierModel(ModifierType.HEALTH, this.resolve(equipmentTemplate.minHealth, equipmentTemplate.maxHealth, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.STAMINA, this.resolve(equipmentTemplate.minStamina, equipmentTemplate.maxStamina, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.OFFENCE, this.resolve(equipmentTemplate.minOffence, equipmentTemplate.maxOffence, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.DEFENCE, this.resolve(equipmentTemplate.minDefence, equipmentTemplate.maxDefence, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.ARMOR, this.resolve(equipmentTemplate.minArmor, equipmentTemplate.maxArmor, itemStrength)));
    modifiers.push(new ModifierModel(ModifierType.DAMAGE, this.resolve(equipmentTemplate.minDamage, equipmentTemplate.maxDamage, itemStrength)));
    modifiers.filter((modifier: ModifierModel) => modifier.modifier > 0);

    const value = this.resolve(equipmentTemplate.minValue, equipmentTemplate.maxValue, itemStrength);

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

  private resolve(from: number, to: number, random: number): number {
    return Math.round(random * (to - from)) + from;
  }

  private resolveRarity(baseRarity: EquipmentRarityType, itemStrength: number): EquipmentRarityType {
    if (itemStrength <= AppConstants.INCREASE_RARITY_THRESHOLD) {
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

