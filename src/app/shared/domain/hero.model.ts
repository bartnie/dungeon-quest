import {AppConstants} from "../../app.consts";

export class HeroModel {
  public name: string;
  public currentStamina: number;
  public maxStamina: number;
  public currentHealth: number;
  public maxHealth: number;
  public offence: number;
  public defence: number;
  public armor: number;
  public damage: number;

  constructor() {
    this.name = AppConstants.INITIAL_NAME;
    this.currentStamina = AppConstants.INITIAL_STAMINA;
    this.maxStamina = AppConstants.INITIAL_STAMINA;
    this.currentHealth = AppConstants.INITIAL_HEALTH;
    this.maxHealth = AppConstants.INITIAL_HEALTH;
    this.offence = AppConstants.INITIAL_OFFENCE;
    this.defence = AppConstants.INITIAL_DEFENCE;
    this.armor = AppConstants.INITIAL_ARMOR;
    this.damage = AppConstants.INITIAL_DAMAGE;
  }
}
