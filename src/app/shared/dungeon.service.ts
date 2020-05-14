import {Injectable} from '@angular/core';
import {EnemyService} from "./enemy.service";
import {EnemyModel} from "./domain/enemy.model";
import {GoldService} from "./gold.service";
import {EquipmentService} from "./equipment.service";
import {EquipmentModel} from "./domain/equipment.model";
import {HeroService} from "./hero.service";
import {AppConstants} from "../app.consts";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private _dungeonLevel: number;
  private _currentEnemy: EnemyModel;
  currentEnemy: BehaviorSubject<EnemyModel>;

  constructor(private enemyService: EnemyService, private goldService: GoldService, private equipmentService: EquipmentService, private heroService: HeroService) {
    this._dungeonLevel = 1;
    this._currentEnemy = enemyService.prepareEnemy(this._dungeonLevel);
    this.currentEnemy = new BehaviorSubject<EnemyModel>(this._currentEnemy);
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

  private levelPassed() {
    this._dungeonLevel += 1;
    this.goldService.addGold(this._currentEnemy.gold);
    this._currentEnemy.items.forEach(
      (item: EquipmentModel) => this.equipmentService.addItem(item)
    );
    this._currentEnemy = this.enemyService.prepareEnemy(this._dungeonLevel);
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

  private handleHeroDeath() {

  }

}