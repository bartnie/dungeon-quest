import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {BattleInfoModel} from "./domain/battle-info/battle-info.model";
import {BattleInfoType} from "./domain/battle-info/battle-info-type.enum";
import {AttackType} from "./domain/hero/attack-type.enum";

@Injectable({
  providedIn: 'root'
})
export class BattleInfoService {
  private _battleInfo: Map<BattleInfoType, BattleInfoModel>;
  battleInfo: Subject<Map<BattleInfoType, BattleInfoModel>>;

  constructor() {
    this._battleInfo = new Map<BattleInfoType, BattleInfoModel>();
    this.battleInfo = new Subject<Map<BattleInfoType, BattleInfoModel>>();
  }

  addBattleMessage(infoType: BattleInfoType, totalDamage: number, defenceBonus: number, armor: number,
                   offenceBonus: number, attackType: AttackType, damageMultiplier: number, damage: number) {
    const battleInfo = new BattleInfoModel(totalDamage, defenceBonus, armor, offenceBonus, attackType, damageMultiplier, damage);
    this._battleInfo.set(infoType, battleInfo);
    this.battleInfo.next(new Map(this._battleInfo));
  }

  clearBattleMessages() {
    this._battleInfo.clear();
    this.battleInfo.next(new Map(this._battleInfo));
  }
}

