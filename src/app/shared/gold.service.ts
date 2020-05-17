import {Injectable} from '@angular/core';
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {EquipmentService} from "./equipment.service";
import {InitialSettings} from "../constants/initial.settings";

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  private _currentGold: number;

  constructor(private equipmentService: EquipmentService) {
    this._currentGold = InitialSettings.INITIAL_GOLD;
  }

  get currentGold(): number {
    return this._currentGold;
  }

  addGold(amount: number) {
    this._currentGold += amount;
  }

  subtractGold(amount: number): boolean {
    if (this._currentGold < amount) {
      return false;
    }
    this._currentGold -= amount;
    return true;
  }

  sellItem(item: EquipmentModel) {
    this.equipmentService.removeItem(item);
    this.addGold(item.value);
  }
}
