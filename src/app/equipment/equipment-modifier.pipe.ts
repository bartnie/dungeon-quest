import {Pipe, PipeTransform} from '@angular/core';
import {EquipmentModel} from "../shared/domain/equipment.model";
import {ModifierModel} from "../shared/domain/modifier.model";

@Pipe({
  name: 'equipmentModifier'
})
export class EquipmentModifierPipe implements PipeTransform {
  transform(modifier: ModifierModel): string {
    return `${modifier.modifierType}: ${modifier.modifier}`;
  }
}
