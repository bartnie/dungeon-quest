import {EnemyType} from "./enemy-type.enum";

export class EnemyTypeProbability {
  constructor(public probability: number, public enemyType: EnemyType) {
  }
}
