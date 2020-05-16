import {Injectable} from '@angular/core';
import {EnemyFactoryService} from "./enemy-factory.service";
import {EnemyModel} from "./domain/enemy/enemy.model";
import {GoldService} from "./gold.service";
import {EquipmentService} from "./equipment.service";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {HeroService} from "./hero.service";
import {AppConstants} from "../app.consts";
import {BehaviorSubject} from "rxjs";
import {RoutingService} from "./routing.service";
import {AttackType} from "./domain/hero/attack-type.enum";
import {BattleInfoService} from "./battle-info.service";
import {BattleInfoType} from "./domain/battle-info/battle-info-type.enum";

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private _dungeonLevel: number;
  private _currentEnemy: EnemyModel;
  currentEnemy: BehaviorSubject<EnemyModel>;
  oldEnemy: BehaviorSubject<EnemyModel>;

  constructor(private enemyFactoryService: EnemyFactoryService, private goldService: GoldService, private equipmentService: EquipmentService,
              private heroService: HeroService, private routingService: RoutingService, private battleInfoService: BattleInfoService) {
    this._dungeonLevel = 1;
    this._currentEnemy = enemyFactoryService.prepareEnemy(this._dungeonLevel);
    this.currentEnemy = new BehaviorSubject<EnemyModel>(this._currentEnemy);
    this.oldEnemy = new BehaviorSubject<EnemyModel>(null);
  }

  get dungeonLevel(): number {
    return this._dungeonLevel;
  }

  updateEnemyName(name: string) {
    this._currentEnemy.name = name;
    this.currentEnemy.next({...this._currentEnemy})
  }

  nextTurn(attackType: AttackType) {
    if (!this.heroService.removeHealth(
      this.calculateDamage(BattleInfoType.ENEMY_DAMAGE, attackType, this._currentEnemy.offence, this._currentEnemy.damage, this.heroService.defence, this.heroService.armor)
    )) {
      this.handleHeroDeath();
    } else if (!this.removeEnemyHealth(
      this.calculateDamage(BattleInfoType.HERO_DAMAGE, attackType, this.heroService.offence, this.heroService.damage, this._currentEnemy.defence, this._currentEnemy.armor)
    )) {
      this.levelPassed();
    }
    this.currentEnemy.next({...this._currentEnemy});
  }

  handleHeroQuit() {
    this._currentEnemy.currentHealth = this._currentEnemy.maxHealth;
    this.currentEnemy.next({...this._currentEnemy})
  }

  private levelPassed() {
    let lastLevelPassed = false;
    if (this._dungeonLevel === AppConstants.MAX_DUNGEON_LEVEL) {
      lastLevelPassed = true;
    }
    this._dungeonLevel += 1;
    this.handleLoot();
    this.oldEnemy.next(this._currentEnemy);

    const nextLevelDifficulty = Math.min(AppConstants.MAX_DUNGEON_LEVEL, this._dungeonLevel);
    this._currentEnemy = this.enemyFactoryService.prepareEnemy(nextLevelDifficulty);

    if (lastLevelPassed) {
      this.handleLastLevelPassed();
      return;
    }
    this.routingService.showBattleWinPage();
  }

  private handleLoot() {
    this.goldService.addGold(this._currentEnemy.gold);
    this._currentEnemy.items.forEach(
      (item: EquipmentModel) => {
        if (!this.equipmentService.addItem(item)) {
          this.goldService.sellItem(item);
          this._currentEnemy.goldFromDiscardedItems += item.value;
        }
      }
    );
  }

  private handleHeroDeath() {
    this.routingService.showBattleLossPage();
  }

  private handleLastLevelPassed() {
    this.routingService.showGameFinishedPage();
  }

  private removeEnemyHealth(amount: number): boolean {
    if (this._currentEnemy.currentHealth <= amount) {
      this._currentEnemy.currentHealth = 0;
      return false;
    }
    this._currentEnemy.currentHealth -= amount;
    this._currentEnemy.currentHealth = Math.round(
      this._currentEnemy.currentHealth * (1 / AppConstants.HEALTH_DIGIT_PRECISION))
      / (1 / AppConstants.HEALTH_DIGIT_PRECISION);
    return true;
  }

  private calculateDamage(infoType: BattleInfoType, attackType: AttackType, attackerOffence: number, attackerDamage: number,
                          defenderDefence: number, defenderArmor: number): number {
    const offenceBonus = this.getBonusValue(attackerOffence, defenderDefence);
    const defenceBonus = this.getBonusValue(defenderDefence, attackerOffence);
    const damageMultiplier = this.getDamageMultiplier(attackType);

    const damage = damageMultiplier * attackerDamage * (1 + offenceBonus);
    const armor = defenderArmor * (1 + defenceBonus);

    let totalDamage = this.positiveOrZero(damage - armor);

    this.handleBattleInfo(infoType, totalDamage, defenceBonus, armor, offenceBonus, attackType, damageMultiplier, damage);
    return totalDamage;
  }

  private getBonusValue(bonusRelatedValue: number, contraryValue: number) {
    return AppConstants.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(bonusRelatedValue - contraryValue);
  }

  private getDamageMultiplier(attackType: AttackType) {
    if (attackType === AttackType.RISKY) {
      return Math.round(Math.random() * (1 / AppConstants.DAMAGE_MULTIPLIER_DIGIT_PRECISION)) * AppConstants.DAMAGE_MULTIPLIER_DIGIT_PRECISION;
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
