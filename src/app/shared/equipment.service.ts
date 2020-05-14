import {Injectable} from '@angular/core';
import {EquipmentType} from "./domain/equipment-type.enum";
import {EquipmentModel} from "./domain/equipment.model";
import {ModifierType} from "./domain/modifier-type.enum";
import {AppConstants} from "../app.consts";
import {BehaviorSubject, Subject} from "rxjs";
import {ModifierModel} from "./domain/modifier.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private readonly _currentEquipment: Map<EquipmentType, EquipmentModel>;
  private readonly _bag: EquipmentModel[];

  currentEquipment: BehaviorSubject<Map<EquipmentType, EquipmentModel>>;
  bag: BehaviorSubject<EquipmentModel[]>;
  equipmentItemDragged = new Subject<EquipmentType>();

  constructor() {
    this._bag = [
      new EquipmentModel(EquipmentType.ARMOR, "Noble Armor", [new ModifierModel(ModifierType.ARMOR, 4)], 40, "https://bottega.avalonceltic.com/rep_immagini/prod/935_80_lrg.jpg"),
      new EquipmentModel(EquipmentType.ARMOR, "Dragon Armor", [new ModifierModel(ModifierType.ARMOR, 6)], 140, "https://jetimages.jetcdn.net/md5/2d215f79a51cd7d94cb04ea781c949b0?odnBound=1000"),
      new EquipmentModel(EquipmentType.BOOTS, "Knight's Boots", [new ModifierModel(ModifierType.STAMINA, 35)], 55, "https://i.pinimg.com/474x/d2/c2/66/d2c266f82004780bf95cb97d860c7a9f.jpg"),
      new EquipmentModel(EquipmentType.HELMET, "Galaxy Helmet", [new ModifierModel(ModifierType.HEALTH, 40)], 60, "https://www.xcoser.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/e/helmet1_1.gif"),
      new EquipmentModel(EquipmentType.SHIELD, "Ancient Shield", [new ModifierModel(ModifierType.DEFENCE, 8)], 80, "https://image.shutterstock.com/image-photo/old-decorative-shield-isolated-over-600w-153782261.jpg"),
      new EquipmentModel(EquipmentType.WEAPON, "Great Sword", [new ModifierModel(ModifierType.DAMAGE, 5), new ModifierModel(ModifierType.OFFENCE, 8)], 220, "https://www.militaria.pl/upload/wysiwyg/gfx/produkty/noze/ColdSteel/88HNH/Miecz_Cold_Steel_Hand_and_a_Half_Sword_88HNH-112.jpg")
    ];
    this._currentEquipment = new Map<EquipmentType, EquipmentModel>();
    this.currentEquipment = new BehaviorSubject<Map<EquipmentType, EquipmentModel>>(this._currentEquipment);
    this.bag = new BehaviorSubject<EquipmentModel[]>(this._bag);


  }

  equip(item: EquipmentModel) {
    const index = this.matchItem(item);
    console.log(index);
    this._bag.splice(index, 1);
    if (this._currentEquipment.has(item.equipmentType)) {
      this.takeOff(item.equipmentType)
    }
    this._currentEquipment.set(item.equipmentType, item);
    this.sendChangesEvents();
  }

  takeOff(itemType: EquipmentType) {
    this._bag.push(this._currentEquipment.get(itemType));
    this._currentEquipment.delete(itemType)
    this.sendChangesEvents();
  }

  removeItem(item: EquipmentModel) {
    const index = this._bag.indexOf(item);
    if (index >= 0) {
      this._bag.splice(index, 1);
    } else if (this._currentEquipment.get(item.equipmentType) === item) {
      this._currentEquipment.delete(item.equipmentType);
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
      let modifiersMatch = true;
      for (let i = 0; i < element.modifiers.length; i++) {
        if (!(element.modifiers[i].modifierType == item.modifiers[i].modifierType &&
          element.modifiers[i].modifier == item.modifiers[i].modifier)) {
          modifiersMatch = false;
        }
      }
      return element.equipmentType === item.equipmentType &&
        element.name === item.name &&
        element.value === item.value &&
        element.imagePath === item.imagePath &&
        modifiersMatch
    });
  }

  private sendChangesEvents() {
    this.currentEquipment.next(new Map<EquipmentType, EquipmentModel>(this._currentEquipment));
    this.bag.next(this._bag.slice());
  }

  isBagFull(): boolean {
    return this._bag.length >= AppConstants.BAG_CAPACITY;
  }
}
