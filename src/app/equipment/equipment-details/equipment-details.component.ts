import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EquipmentModel} from "../../shared/domain/equipment/equipment.model";
import {GoldService} from "../../shared/gold.service";
import {EquipmentRarityType} from "../../shared/domain/equipment/equipment-rarity-type.enum";

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss']
})
export class EquipmentDetailsComponent {
  @Input() item: EquipmentModel;
  @Output() itemDeselected = new EventEmitter<void>();
  private rarityType = EquipmentRarityType;

  constructor(private goldService: GoldService) {
  }

  onDeselectItem() {
    this.itemDeselected.emit();
  }

  onSellItem(item: EquipmentModel) {
    this.goldService.sellItem(item);
  }
}
