import {Injectable} from '@angular/core';
import {EquipmentService} from "./equipment.service";
import {ModifierType} from "./domain/modifier/modifier-type.enum";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {SlotType} from "./domain/equipment/slot-type.enum";
import {ModifierModel} from "./domain/modifier/modifier.model";
import {BehaviorSubject, Subject} from "rxjs";
import {BonusesModel} from "./domain/hero/bonuses.model";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private _currentEquipment: Map<SlotType, EquipmentModel>;
  private _bonuses: BonusesModel;
  bonuses: BehaviorSubject<BonusesModel>;

  constructor(private equipmentService: EquipmentService) {
    this._bonuses = new BonusesModel();
    this.bonuses = new BehaviorSubject<BonusesModel>({...this._bonuses});

    this.equipmentService.currentEquipment.subscribe(
      (equipment: Map<SlotType, EquipmentModel>) => {
        this._currentEquipment = equipment;
        this.updateBonuses();
        this.bonuses.next({...this._bonuses});
      }
    );
  }

  private updateBonuses() {
    this._bonuses.bonusOffence = this.getBonus(ModifierType.OFFENCE);
    this._bonuses.bonusDefence = this.getBonus(ModifierType.DEFENCE);
    this._bonuses.bonusArmor = this.getBonus(ModifierType.ARMOR);
    this._bonuses.bonusDamage = this.getBonus(ModifierType.DAMAGE);
    this._bonuses.bonusStamina = this.getBonus(ModifierType.STAMINA);
    this._bonuses.bonusHealth = this.getBonus(ModifierType.HEALTH);
  }

  private getBonus(type: ModifierType) {
    let bonus = 0;
    this._currentEquipment.forEach((item: EquipmentModel) =>
      item.modifiers.forEach((modifier: ModifierModel) =>
        bonus += modifier.modifierType === type ? modifier.modifier : 0
      )
    );
    return bonus;
  }
}
