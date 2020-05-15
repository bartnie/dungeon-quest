import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EquipmentModel} from "../../shared/domain/equipment/equipment.model";
import {GoldService} from "../../shared/gold.service";

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss']
})
export class EquipmentDetailsComponent {
  @Input() item: EquipmentModel;

  @Output() itemDeselected = new EventEmitter<void>();

  constructor(private goldService: GoldService) {
  }

  onDeselectItem() {
    this.itemDeselected.emit();
  }

  onSellItem(item: EquipmentModel) {
    this.goldService.sellItem(item);
  }
}
