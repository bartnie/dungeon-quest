import {EnemyType} from "./enemy-type.enum";
import {EquipmentModel} from "./equipment.model";

export class EnemyModel {
  public currentHealth: number;

  constructor(
    public type: EnemyType,
    public name: string,
    public imagePath: string,
    public maxHealth: number,
    public offence: number,
    public defence: number,
    public armor: number,
    public damage: number,
    public gold: number,
    public items: EquipmentModel[]
  ) {
    this.currentHealth = maxHealth;
  }
}
