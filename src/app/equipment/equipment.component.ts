import {Component} from '@angular/core';
import {EquipmentModel} from "../shared/domain/equipment.model";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  selectedItem: EquipmentModel;

  onItemSelected(item: EquipmentModel) {
    if (item === this.selectedItem) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

  onItemDeselected() {
    this.selectedItem = null;
  }
}
