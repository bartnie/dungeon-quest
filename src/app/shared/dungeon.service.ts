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
import {NameService} from "./name.service";
import {repeat, takeWhile, timeoutWith} from "rxjs/operators";
import {AttackType} from "./domain/hero/attack-type.enum";

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private _dungeonLevel: number;
  private _currentEnemy: EnemyModel;
  currentEnemy: BehaviorSubject<EnemyModel>;
  oldEnemy: BehaviorSubject<EnemyModel>;

  constructor(private enemyFactoryService: EnemyFactoryService, private goldService: GoldService, private equipmentService: EquipmentService,
              private heroService: HeroService, private routingService: RoutingService, private nameService: NameService) {
    this._dungeonLevel = 1;
    this._currentEnemy = enemyFactoryService.prepareEnemy(this._dungeonLevel);
    this.currentEnemy = new BehaviorSubject<EnemyModel>(this._currentEnemy);
    this.oldEnemy = new BehaviorSubject<EnemyModel>(null);

    this.nameService.getEnemyName().pipe(
      takeWhile(() => this._currentEnemy.name === null),
      timeoutWith(AppConstants.TIMEOUT, [AppConstants.DEFAULT_ENEMY_NAME]),
      repeat()
    )
      .subscribe((name: string) => {
        if (this._currentEnemy.name === null) {
          this._currentEnemy.name = this.nameService.prepareName(name);
          this.currentEnemy.next({...this._currentEnemy})
        }
      })
  }

  get dungeonLevel(): number {
    return this._dungeonLevel;
  }

  nextTurn(attackType: AttackType) {
    if (!this.heroService.removeHealth(
      this.calculateDamage(attackType, this._currentEnemy.offence, this._currentEnemy.damage, this.heroService.defence, this.heroService.armor)
    )) {
      this.handleHeroDeath();
    } else if (!this.removeEnemyHealth(
      this.calculateDamage(attackType, this.heroService.offence, this.heroService.damage, this._currentEnemy.defence, this._currentEnemy.armor)
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

  private calculateDamage(attackType: AttackType, offence: number, damage: number, defence: number, armor: number): number {
    const offenceBonus = AppConstants.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(offence - defence);
    const defenceBonus = AppConstants.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(defence - offence);
    const damageWithBonuses = this.positiveOrZero(damage * (1 + offenceBonus) - armor * (1 + defenceBonus));
    let totalDamage = damageWithBonuses;
    if (attackType === AttackType.RISKY) {
      const random = Math.random();
      console.log(`Risky attack with modifier: ${random}`);
      totalDamage = 2 * random * damageWithBonuses;
    }
    console.log(`Total damage = ${totalDamage} because
    offenceBonus: ${offenceBonus}
    defenceBonus: ${defenceBonus}
    damage: ${damage}
    armor: ${armor}
    and attack type: ${attackType}`);
    return totalDamage;
  }

  private positiveOrZero(value: number) {
    return value > 0 ? value : 0;
  }

}
