import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {EquipmentModel} from "../../shared/domain/equipment.model";
import {EquipmentService} from "../../shared/equipment.service";
import {EquipmentType} from "../../shared/domain/equipment-type.enum";
import {AppConstants} from "../../app.consts";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<EquipmentModel>();
  private BAG_CAPACITY = AppConstants.BAG_CAPACITY;
  private equipmentBag: EquipmentModel[];
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
    this.equipmentService.equipmentItemDragged.next(item.equipmentType);
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
      this.equipmentService.takeOff(itemType as EquipmentType);
    }
  }

}
