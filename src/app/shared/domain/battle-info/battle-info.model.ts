import {AttackType} from "../hero/attack-type.enum";

export class BattleInfoModel {
  constructor(public totalDamage: number,
              public defenceBonus: number,
              public armor: number,
              public offenceBonus: number,
              public attackType: AttackType,
              public damageMultiplier: number,
              public damage: number) {
  }
}
