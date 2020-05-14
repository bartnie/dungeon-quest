import {Injectable} from '@angular/core';
import {StatsService} from "./stats.service";
import {HeroModel} from "./domain/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private hero: HeroModel;

  constructor(private statsService: StatsService) {
    this.hero = new HeroModel();
  }

  get name(): string {
    return this.hero.name;
  }

  get stamina(): number {
    return this.hero.currentStamina;
  }

  get maxStamina(): number {
    return this.hero.maxStamina + this.statsService.bonusStamina;
  }

  addStamina(amount: number): void {
    this.hero.currentStamina = this.hero.currentStamina + amount > this.maxStamina ? (this.maxStamina > this.hero.currentStamina ? this.maxStamina : this.hero.currentStamina) : this.hero.currentStamina + amount;
  }

  removeStamina(amount: number): boolean {
    if (this.hero.currentStamina < amount) {
      return false;
    }
    this.hero.currentStamina -= amount;
    return true;
  }

  removeHealth(amount: number): boolean {
    if (this.hero.currentHealth <= amount) {
      this.hero.currentHealth = 0;
      return false;
    }
    this.hero.currentHealth -= amount;
    this.hero.currentHealth = Math.round(this.hero.currentHealth * 1000) / 1000;
    return true;
  }

  get health(): number {
    return this.hero.currentHealth;
  }

  get maxHealth(): number {
    return this.hero.maxHealth + this.statsService.bonusHealth;
  }

  addHealth(amount: number): void {
    this.hero.currentHealth = this.hero.currentHealth + amount > this.maxHealth ? (this.maxHealth > this.hero.currentHealth ? this.maxHealth : this.hero.currentHealth) : this.hero.currentHealth + amount;
  }

  get offence(): number {
    return this.hero.offence + this.statsService.bonusOffence;
  }

  addOffence(amount: number): void {
    this.hero.offence += amount;
  }

  get defence(): number {
    return this.hero.defence + this.statsService.bonusDefence;
  }

  addDefence(amount: number): void {
    this.hero.defence += amount;
  }

  get armor(): number {
    return this.hero.armor + this.statsService.bonusArmor;
  }

  addArmor(amount: number): void {
    this.hero.armor += amount;
  }

  get damage(): number {
    return this.hero.damage + this.statsService.bonusDamage;
  }

  addDamage(amount: number): void {
    this.hero.damage += amount;
  }
}
