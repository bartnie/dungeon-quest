import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {EquipmentModel} from "../../shared/domain/equipment.model";
import {EquipmentType} from "../../shared/domain/equipment-type.enum";
import {EquipmentService} from "../../shared/equipment.service";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-equipment-dummy',
  templateUrl: './equipment-dummy.component.html',
  styleUrls: ['./equipment-dummy.component.scss']
})
export class EquipmentDummyComponent implements OnInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<EquipmentModel>();
  private currentEquipment: Map<EquipmentType, EquipmentModel>;
  private slotToHighlight: EquipmentType;
  private equipmentTypes = EquipmentType;
  private componentActive: boolean;

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.equipmentService.currentEquipment.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (equipment: Map<EquipmentType, EquipmentModel>) => this.currentEquipment = equipment
      );
    this.equipmentService.equipmentItemDragged.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (itemType: EquipmentType) => this.slotToHighlight = itemType
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onItemSelected(type: EquipmentType) {
    this.itemSelected.emit(this.currentEquipment.get(type));
  }

  onDragover(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, type: EquipmentType) {
    event.preventDefault();
    const item = JSON.parse(event.dataTransfer.getData("item")) as EquipmentModel;
    if (item.equipmentType === type) {
      this.equipmentService.equip(item);
    }
    this.slotToHighlight = null;
  }

  onDragStart(event: DragEvent, itemType: EquipmentType) {
    event.dataTransfer.setData("itemType", itemType);
  }
}
