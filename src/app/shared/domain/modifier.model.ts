import {ModifierType} from "./modifier-type.enum";

export class ModifierModel {
  constructor(public modifierType: ModifierType,
              public modifier: number) {
  }
}
