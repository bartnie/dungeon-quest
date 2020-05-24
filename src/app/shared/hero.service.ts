import {Injectable} from '@angular/core';
import {StatsService} from "./stats.service";
import {HeroModel} from "./domain/hero/hero.model";
import {BehaviorSubject} from "rxjs";
import {BonusesModel} from "./domain/hero/bonuses.model";
import {DigitPrecisionSettings} from "../constants/digit-precision.settings";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly _baseHero: HeroModel;
  private readonly _hero: HeroModel;
  private _bonuses: BonusesModel;
  readonly hero: BehaviorSubject<HeroModel>;

  constructor(private statsService: StatsService) {
    this._baseHero = new HeroModel();
    this._hero = new HeroModel();
    this.hero = new BehaviorSubject<HeroModel>(this._hero);

    this.statsService.bonuses.subscribe(
      (bonuses: BonusesModel) => {
        this._bonuses = bonuses;
        this.updateHero();
      }
    );
  }

  private updateHero() {
    this._hero.offence = this._baseHero.offence + this._bonuses.bonusOffence;
    this._hero.defence = this._baseHero.defence + this._bonuses.bonusDefence;
    this._hero.armor = this._baseHero.armor + this._bonuses.bonusArmor;
    this._hero.damage = this._baseHero.damage + this._bonuses.bonusDamage;
    this._hero.maxStamina = this._baseHero.maxStamina + this._bonuses.bonusStamina;
    this._hero.maxHealth = this._baseHero.maxHealth + this._bonuses.bonusHealth;
    this.hero.next({...this._hero});
  }


  setName(name: string) {
    this._hero.name = name;
    this.hero.next({...this._hero});
  }

  getName(): string {
    return this._hero.name;
  }

  addStamina(amount: number): void {
    this._hero.currentStamina = this.calculateRegardingMax(this._hero.currentStamina, amount, this._hero.maxStamina);
    this.hero.next({...this._hero});
  }

  removeStamina(amount: number): boolean {
    if (this._hero.currentStamina < amount) {
      return false;
    }
    this._hero.currentStamina -= amount;
    this.hero.next({...this._hero});
    return true;
  }

  addHealth(amount: number): void {
    this._hero.currentHealth = this.calculateRegardingMax(this._hero.currentHealth, amount, this._hero.maxHealth);
    this.hero.next({...this._hero});
  }

  removeHealth(amount: number): boolean {
    if (this._hero.currentHealth <= amount) {
      this._hero.currentHealth = 0;
      this.hero.next({...this._hero});
      return false;
    }
    this._hero.currentHealth -= amount;
    this._hero.currentHealth = Math.round(
      this._hero.currentHealth * (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION))
      / (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION);

    this.hero.next({...this._hero});
    return true;
  }

  addBaseOffence(amount: number): void {
    this._baseHero.offence += amount;
    this._hero.offence = this._baseHero.offence + this._bonuses.bonusOffence;
    this.hero.next({...this._hero});
  }

  addBaseDefence(amount: number): void {
    this._baseHero.defence += amount;
    this._hero.defence = this._baseHero.defence + this._bonuses.bonusDefence;
    this.hero.next({...this._hero});
  }

  addBaseArmor(amount: number): void {
    this._baseHero.armor += amount;
    this._hero.armor = this._baseHero.armor + this._bonuses.bonusArmor;
    this.hero.next({...this._hero});
  }

  addBaseDamage(amount: number): void {
    this._baseHero.damage += amount;
    this._hero.damage = this._baseHero.damage + this._bonuses.bonusDamage;
    this.hero.next({...this._hero});
  }

  addBaseMaxStamina(amount: number): void {
    this._baseHero.maxStamina += amount;
    this._hero.maxStamina = this._baseHero.maxStamina + this._bonuses.bonusStamina;
    this.hero.next({...this._hero});
  }

  addBaseMaxHealth(amount: number): void {
    this._baseHero.maxHealth += amount;
    this._hero.maxHealth = this._baseHero.maxHealth + this._bonuses.bonusHealth;
    this.hero.next({...this._hero});
  }

  private calculateRegardingMax(current: number, toAdd: number, max: number) {
    const exceedMax = current + toAdd > max;
    current = exceedMax ?
      (max > current ? max : current) :
      current + toAdd;
    return current;
  }
}
