import {AttackType} from "../hero/attack-type.enum";
import {BattleInfoType} from "./battle-info-type.enum";

export class BattleInfoModel {
  constructor(public infoType: BattleInfoType,
              public totalDamage: number,
              public defenceBonus: number,
              public armor: number,
              public offenceBonus: number,
              public attackType: AttackType,
              public damageMultiplier: number,
              public damage: number) {
  }
}
