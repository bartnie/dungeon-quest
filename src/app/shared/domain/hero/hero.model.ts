import {InitialSettings} from "../../../constants/initial.settings";

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
    this.currentStamina = InitialSettings.INITIAL_STAMINA;
    this.maxStamina = InitialSettings.INITIAL_STAMINA;
    this.currentHealth = InitialSettings.INITIAL_HEALTH;
    this.maxHealth = InitialSettings.INITIAL_HEALTH;
    this.offence = InitialSettings.INITIAL_OFFENCE;
    this.defence = InitialSettings.INITIAL_DEFENCE;
    this.armor = InitialSettings.INITIAL_ARMOR;
    this.damage = InitialSettings.INITIAL_DAMAGE;
  }
}
