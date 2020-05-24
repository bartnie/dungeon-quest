import {Injectable} from '@angular/core';
import {AttackType} from "./domain/hero/attack-type.enum";
import {BattleInfoType} from "./domain/battle-info/battle-info-type.enum";
import {BattleSettings} from "../constants/battle.settings";
import {DigitPrecisionSettings} from "../constants/digit-precision.settings";
import {BattleInfoService} from "./battle-info.service";
import {HeroService} from "./hero.service";
import {DungeonService} from "./dungeon.service";
import {RoutingService} from "./routing.service";
import {EnemyModel} from "./domain/enemy/enemy.model";
import {HeroModel} from "./domain/hero/hero.model";

@Injectable({
  providedIn: 'root'
})
export class BattleMechanicsService {
  private _currentEnemy: EnemyModel;
  private _hero: HeroModel;

  constructor(private heroService: HeroService, private dungeonService: DungeonService,
              private battleInfoService: BattleInfoService, private routingService: RoutingService) {
    this.dungeonService.currentEnemy.subscribe(
      (enemy: EnemyModel) => this._currentEnemy = enemy
    );

    this.heroService.hero.subscribe(
      (hero: HeroModel) => (this._hero = hero)
    );

  }

  nextTurn(attackType: AttackType) {
    if (!this.heroService.removeHealth(
      this.calculateDamage(BattleInfoType.ENEMY_DAMAGE, attackType, this._currentEnemy.offence, this._currentEnemy.damage, this._hero.defence, this._hero.armor)
    )) {
      this.handleHeroDeath();
    } else if (!this.dungeonService.removeEnemyHealth(
      this.calculateDamage(BattleInfoType.HERO_DAMAGE, attackType, this._hero.offence, this._hero.damage, this._currentEnemy.defence, this._currentEnemy.armor)
    )) {
      this.dungeonService.levelPassed();
    }
  }


  private handleHeroDeath() {
    this.routingService.showBattleLossPage();
  }

  private calculateDamage(infoType: BattleInfoType, attackType: AttackType, attackerOffence: number, attackerDamage: number,
                          defenderDefence: number, defenderArmor: number): number {
    const offenceBonus = this.getBonusValue(attackerOffence, defenderDefence);
    const defenceBonus = this.getBonusValue(defenderDefence, attackerOffence);
    const damageMultiplier = this.getDamageMultiplier(attackType);

    const damage = damageMultiplier * attackerDamage * (1 + offenceBonus);
    const armor = defenderArmor * (1 + defenceBonus);

    let totalDamage = Math.round(
      this.positiveOrZero(damage - armor) * (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION))
      / (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION);

    this.handleBattleInfo(infoType, totalDamage, defenceBonus, armor, offenceBonus, attackType, damageMultiplier, damage);
    return totalDamage;
  }

  private getBonusValue(bonusRelatedValue: number, contraryValue: number) {
    return Math.round(BattleSettings.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(bonusRelatedValue - contraryValue) * (1 / BattleSettings.OFFENCE_DEFENCE_BONUS_COEFFICIENT))
      / (1 / BattleSettings.OFFENCE_DEFENCE_BONUS_COEFFICIENT);
  }

  private getDamageMultiplier(attackType: AttackType) {
    if (attackType === AttackType.RISKY) {
      return Math.round(2 * Math.random() * (1 / DigitPrecisionSettings.DAMAGE_MULTIPLIER_DIGIT_PRECISION))
        / (1 / DigitPrecisionSettings.DAMAGE_MULTIPLIER_DIGIT_PRECISION);
    }
    return 1;
  }

  private handleBattleInfo(infoType: BattleInfoType, totalDamage: number, defenceBonus: number, armor: number,
                           offenceBonus: number, attackType: AttackType, damageMultiplier: number, damage: number) {
    this.battleInfoService.addBattleMessage(infoType, totalDamage, defenceBonus, armor, offenceBonus, attackType, damageMultiplier, damage);
  }

  private positiveOrZero(value: number): number {
    return value > 0 ? value : 0;
  }
}
