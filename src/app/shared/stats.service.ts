import {Injectable} from '@angular/core';
import {EquipmentService} from "./equipment.service";
import {ModifierType} from "./domain/modifier/modifier-type.enum";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {SlotType} from "./domain/equipment/slot-type.enum";
import {ModifierModel} from "./domain/modifier/modifier.model";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  currentEquipment: Map<SlotType, EquipmentModel>;

  constructor(private equipmentService: EquipmentService) {
    this.equipmentService.currentEquipment.subscribe(
      (equipment: Map<SlotType, EquipmentModel>) => this.currentEquipment = equipment
    );
  }

  get bonusOffence() {
    let bonusOffence = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusOffence += modifier.modifierType === ModifierType.OFFENCE ? modifier.modifier : 0
      )
    );
    return bonusOffence;
  }

  get bonusDefence() {
    let bonusDefence = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusDefence += modifier.modifierType === ModifierType.DEFENCE ? modifier.modifier : 0
      )
    );
    return bonusDefence;
  }

  get bonusArmor() {
    let bonusArmor = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusArmor += modifier.modifierType === ModifierType.ARMOR ? modifier.modifier : 0
      ));
    return bonusArmor;
  }

  get bonusDamage() {
    let bonusDamage = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusDamage += modifier.modifierType === ModifierType.DAMAGE ? modifier.modifier : 0
      ));
    return bonusDamage;
  }

  get bonusHealth() {
    let bonusHealth = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusHealth += modifier.modifierType === ModifierType.HEALTH ? modifier.modifier : 0
      ));
    return bonusHealth;
  }

  get bonusStamina() {
    let bonusStamina = 0;
    this.currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonusStamina += modifier.modifierType === ModifierType.STAMINA ? modifier.modifier : 0
      ));
    return bonusStamina;
  }
}
