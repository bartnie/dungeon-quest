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

  nextTurn() {
    if (!this.heroService.removeHealth(
      this.calculateDamage(this._currentEnemy.offence, this._currentEnemy.damage, this.heroService.defence, this.heroService.armor)
    )) {
      this.handleHeroDeath();
    } else if (!this.removeEnemyHealth(
      this.calculateDamage(this.heroService.offence, this.heroService.damage, this._currentEnemy.defence, this._currentEnemy.armor)
    )) {
      this.levelPassed();
    }
    this.currentEnemy.next({...this._currentEnemy});
  }

  handleHeroQuit() {
    this._currentEnemy.currentHealth = this._currentEnemy.maxHealth;
  }

  private levelPassed() {
    if (this._dungeonLevel === AppConstants.MAX_DUNGEON_LEVEL) {
      this.handleLastLevelPassed();
    }
    this._dungeonLevel += 1;
    this.goldService.addGold(this._currentEnemy.gold);
    this._currentEnemy.items.forEach(
      (item: EquipmentModel) => this.equipmentService.addItem(item)
    );
    this.oldEnemy.next(this._currentEnemy);
    this._currentEnemy = this.enemyFactoryService.prepareEnemy(this._dungeonLevel);
    this.routingService.showBattleWinPage();
  }

  private handleHeroDeath() {
    this.routingService.showBattleLossPage();
  }

  private handleLastLevelPassed() {
  }

  private removeEnemyHealth(amount: number): boolean {
    if (this._currentEnemy.currentHealth <= amount) {
      this._currentEnemy.currentHealth = 0;
      return false;
    }
    this._currentEnemy.currentHealth -= amount;
    this._currentEnemy.currentHealth = Math.round(this._currentEnemy.currentHealth * 1000) / 1000;
    return true;
  }

  private calculateDamage(offence: number, damage: number, defence: number, armor: number): number {
    const offenceBonus = AppConstants.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(offence - defence);
    const defenceBonus = AppConstants.OFFENCE_DEFENCE_BONUS_COEFFICIENT * this.positiveOrZero(defence - offence);
    return this.positiveOrZero(damage * (1 + offenceBonus) - armor * (1 + defenceBonus));
  }

  private positiveOrZero(value: number) {
    return value > 0 ? value : 0;
  }

}
