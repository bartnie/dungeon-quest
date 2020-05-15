import {Injectable} from '@angular/core';
import {SlotType} from "./domain/slot-type.enum";
import {EquipmentModel} from "./domain/equipment.model";
import {AppConstants} from "../app.consts";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private readonly _currentEquipment: Map<SlotType, EquipmentModel>;
  private readonly _bag: EquipmentModel[];

  currentEquipment: BehaviorSubject<Map<SlotType, EquipmentModel>>;
  bag: BehaviorSubject<EquipmentModel[]>;
  equipmentItemDragged = new Subject<SlotType>();

  constructor() {
    this._bag = [];
    this._currentEquipment = new Map<SlotType, EquipmentModel>();
    this.currentEquipment = new BehaviorSubject<Map<SlotType, EquipmentModel>>(this._currentEquipment);
    this.bag = new BehaviorSubject<EquipmentModel[]>(this._bag);
  }

  equip(item: EquipmentModel) {
    const index = this.matchItem(item);
    this._bag.splice(index, 1);
    if (this._currentEquipment.has(item.slotType)) {
      this.takeOff(item.slotType)
    }
    this._currentEquipment.set(item.slotType, item);
    this.sendChangesEvents();
  }

  takeOff(itemType: SlotType) {
    this._bag.push(this._currentEquipment.get(itemType));
    this._currentEquipment.delete(itemType)
    this.sendChangesEvents();
  }

  removeItem(item: EquipmentModel) {
    const index = this._bag.indexOf(item);
    if (index >= 0) {
      this._bag.splice(index, 1);
    } else if (this._currentEquipment.get(item.slotType) === item) {
      this._currentEquipment.delete(item.slotType);
    }
    this.sendChangesEvents();
  }

  addItem(item: EquipmentModel) {
    if (!this.isBagFull()) {
      this._bag.push(item);
      this.sendChangesEvents();
    }
  }

  private matchItem(item: EquipmentModel): number {
    return this._bag.findIndex((element: EquipmentModel) => {
      let modifiersMatch = element.modifiers.length === item.modifiers.length;
      if (modifiersMatch) {
        for (let i = 0; i < element.modifiers.length; i++) {
          if (!(element.modifiers[i].modifierType === item.modifiers[i].modifierType &&
            element.modifiers[i].modifier === item.modifiers[i].modifier)) {
            modifiersMatch = false;
          }
        }
      }
      return element.slotType === item.slotType &&
        element.name === item.name &&
        element.value === item.value &&
        element.imagePath === item.imagePath &&
        modifiersMatch
    });
  }

  private sendChangesEvents() {
    this.currentEquipment.next(new Map<SlotType, EquipmentModel>(this._currentEquipment));
    this.bag.next(this._bag.slice());
  }

  isBagFull(): boolean {
    return this._bag.length >= AppConstants.BAG_CAPACITY;
  }
}
