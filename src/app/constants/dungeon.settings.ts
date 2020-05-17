import {EnemyTypeProbability} from "../shared/domain/enemy/enemy-type-probability.model";
import {EnemyType} from "../shared/domain/enemy/enemy-type.enum";

export class DungeonSettings {
  public static MAX_DUNGEON_LEVEL = 13;

  public static ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [new EnemyTypeProbability( 1,  EnemyType.TROGLODYTE)]],
    [2, [new EnemyTypeProbability(1,  EnemyType.TROGLODYTE)]],
    [3, [new EnemyTypeProbability(1,  EnemyType.TROGLODYTE)]],
    [4, [new EnemyTypeProbability(0.8,  EnemyType.TROGLODYTE), new EnemyTypeProbability( 0.2,  EnemyType.BEHEMOT)]],
    [5, [new EnemyTypeProbability(0.6,  EnemyType.TROGLODYTE), new EnemyTypeProbability( 0.4,  EnemyType.BEHEMOT)]],
    [6, [new EnemyTypeProbability(0.6,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.3,  EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [7, [new EnemyTypeProbability(0.8,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.1,  EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [8, [new EnemyTypeProbability(0.8,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.2,  EnemyType.DRAGON)]],
    [9, [new EnemyTypeProbability(0.6,  EnemyType.BEHEMOT), new EnemyTypeProbability( 0.4,  EnemyType.DRAGON)]],
    [10, [new EnemyTypeProbability(0.6,  EnemyType.DRAGON), new EnemyTypeProbability( 0.4,  EnemyType.BEHEMOT)]],
    [11, [new EnemyTypeProbability(0.8,  EnemyType.DRAGON), new EnemyTypeProbability( 0.2,  EnemyType.BEHEMOT)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [12, [new EnemyTypeProbability(1,  EnemyType.DRAGON)]],
    [13, [new EnemyTypeProbability(1,  EnemyType.BOSS)]]
  ]);}
