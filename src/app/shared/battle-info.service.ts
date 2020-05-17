import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {BattleInfoModel} from "./domain/battle-info/battle-info.model";
import {BattleInfoType} from "./domain/battle-info/battle-info-type.enum";
import {AttackType} from "./domain/hero/attack-type.enum";

@Injectable({
  providedIn: 'root'
})
export class BattleInfoService {
  private _battleInfo: BattleInfoModel[];
  battleInfo: Subject<BattleInfoModel[]>;

  constructor() {
    this._battleInfo = [];
    this.battleInfo = new Subject<BattleInfoModel[]>();
  }

  addBattleMessage(infoType: BattleInfoType, totalDamage: number, defenceBonus: number, armor: number,
                   offenceBonus: number, attackType: AttackType, damageMultiplier: number, damage: number) {
    this._battleInfo.push(new BattleInfoModel(infoType, totalDamage, defenceBonus, armor, offenceBonus, attackType, damageMultiplier, damage));
    this.battleInfo.next([...this._battleInfo]);
  }

  clearBattleMessages() {
    this._battleInfo = [];
    this.battleInfo.next([...this._battleInfo]);
  }
}

