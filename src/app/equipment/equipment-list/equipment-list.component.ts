import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {EquipmentModel} from "../../shared/domain/equipment/equipment.model";
import {EquipmentService} from "../../shared/equipment.service";
import {SlotType} from "../../shared/domain/equipment/slot-type.enum";
import {takeWhile} from "rxjs/operators";
import {EquipmentRarityType} from "../../shared/domain/equipment/equipment-rarity-type.enum";
import {EquipmentSettings} from "../../constants/equipment.settings";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<EquipmentModel>();
  BAG_CAPACITY = EquipmentSettings.BAG_CAPACITY;
  equipmentBag: EquipmentModel[];
  rarityType = EquipmentRarityType;
  private componentActive: boolean;

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.equipmentService.bag.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (bag: EquipmentModel[]) => this.equipmentBag = bag
      )
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onItemSelected(item: EquipmentModel) {
    this.itemSelected.emit(item);
  }

  onDragStart(event: DragEvent, item: EquipmentModel) {
    event.dataTransfer.setData("item", JSON.stringify(item));
    this.equipmentService.equipmentItemDragged.next(item.slotType);
  }

  onDragEnd() {
    this.equipmentService.equipmentItemDragged.next(null);
  }

  onDragover(event: DragEvent) {
    if (!this.equipmentService.isBagFull()) {
      event.preventDefault();
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const itemType = event.dataTransfer.getData("itemType");
    if (itemType) {
      this.equipmentService.takeOff(itemType as SlotType);
    }
  }

}
