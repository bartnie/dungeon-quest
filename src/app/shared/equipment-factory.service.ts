import {Injectable} from '@angular/core';
import {AppConstants} from "../app.consts";
import {EquipmentProbability} from "./domain/equipment-probability.model";
import {EquipmentModel} from "./domain/equipment.model";
import {EquipmentType} from "./domain/equipment-type.enum";
import {EquipmentTemplate} from "./domain/equipment-template.model";
import {ModifierModel} from "./domain/modifier.model";
import {ModifierType} from "./domain/modifier-type.enum";
import {EquipmentRarityType} from "./domain/equipment-rarity-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EquipmentFactoryService {

  randomizeEquipments(probabilities: EquipmentProbability[]): EquipmentModel[] {
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

    return new EquipmentModel(
      equipmentTemplate.slotType,
      equipmentType.toString(),
      modifiers,
      value,
      equipmentTemplate.imagePath,
      equipmentTemplate.baseRarity
    );
  }

  private resolve(from: number, to: number, random: number): number {
    return Math.round(random * (to - from)) + from;
  }
}
