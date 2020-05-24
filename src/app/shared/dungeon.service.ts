import {Injectable} from '@angular/core';
import {EnemyFactoryService} from "./enemy-factory.service";
import {EnemyModel} from "./domain/enemy/enemy.model";
import {GoldService} from "./gold.service";
import {EquipmentService} from "./equipment.service";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {BehaviorSubject} from "rxjs";
import {RoutingService} from "./routing.service";
import {DungeonSettings} from "../constants/dungeon.settings";
import {DigitPrecisionSettings} from "../constants/digit-precision.settings";

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private _dungeonCurrentLevel: number;
  private _dungeonMaxLevel: number;
  private _lastLevelPassed: boolean;
  private _currentEnemy: EnemyModel;
  private _currentMaxLevelEnemy: EnemyModel;
  currentEnemy: BehaviorSubject<EnemyModel>;
  oldEnemy: BehaviorSubject<EnemyModel>;

  constructor(private enemyFactoryService: EnemyFactoryService, private goldService: GoldService, private equipmentService: EquipmentService,
              private routingService: RoutingService) {
    this._lastLevelPassed = false
    this._dungeonCurrentLevel = 1;
    this._dungeonMaxLevel = this._dungeonCurrentLevel;
    this._currentEnemy = enemyFactoryService.prepareEnemy(this._dungeonCurrentLevel);
    this.currentEnemy = new BehaviorSubject<EnemyModel>(this._currentEnemy);
    this.oldEnemy = new BehaviorSubject<EnemyModel>(null);
  }

  get dungeonLevel(): number {
    return this._dungeonCurrentLevel;
  }

  navigateDungeonLevel(change: number) {
    if (!this.canNavigateDungeonLevel(change)) return;

    this.handleHeroQuit();
    if (this._dungeonCurrentLevel == this._dungeonMaxLevel) {
      this._currentMaxLevelEnemy = this._currentEnemy;
    }

    this._dungeonCurrentLevel += change;
    if (this._dungeonCurrentLevel == this._dungeonMaxLevel) {
      this._currentEnemy = this._currentMaxLevelEnemy;
    } else {
      this._currentEnemy = this.enemyFactoryService.prepareEnemy(this._dungeonCurrentLevel);
    }
    this.currentEnemy.next({...this._currentEnemy})
  }

  canNavigateDungeonLevel(change: number) {
    const newLevel = this._dungeonCurrentLevel + change;
    return newLevel >= 1 && newLevel <= this._dungeonMaxLevel;
  }

  updateEnemyName(name: string) {
    this._currentEnemy.name = name;
    this.currentEnemy.next({...this._currentEnemy})
  }

  removeEnemyHealth(amount: number): boolean {
    if (this._currentEnemy.currentHealth <= amount) {
      this._currentEnemy.currentHealth = 0;
      this.currentEnemy.next({...this._currentEnemy});
      return false;
    }
    this._currentEnemy.currentHealth -= amount;
    this._currentEnemy.currentHealth = Math.round(
      this._currentEnemy.currentHealth * (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION))
      / (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION);
    this.currentEnemy.next({...this._currentEnemy});
    return true;
  }

  levelPassed() {
    let lastLevelPassed = false;

    if (this._dungeonCurrentLevel == this._dungeonMaxLevel && this._dungeonCurrentLevel != DungeonSettings.MAX_DUNGEON_LEVEL) {
      this._dungeonCurrentLevel += 1;
      this._dungeonMaxLevel += 1;
    } else if (this._dungeonCurrentLevel === DungeonSettings.MAX_DUNGEON_LEVEL && !this._lastLevelPassed) {
      this._lastLevelPassed = true;
      lastLevelPassed = true;
    }
    this.handleLoot();
    this.oldEnemy.next(this._currentEnemy);
    this._currentEnemy = this.enemyFactoryService.prepareEnemy(this._dungeonCurrentLevel);
    this.currentEnemy.next({...this._currentEnemy});

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

  private handleLastLevelPassed() {
    this.routingService.showGameFinishedPage();
  }

  handleHeroQuit() {
    this._currentEnemy.currentHealth = this._currentEnemy.maxHealth;
    this.currentEnemy.next({...this._currentEnemy})
  }
}
