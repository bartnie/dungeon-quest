import {EnemyTypeProbability} from "../shared/domain/enemy/enemy-type-probability.model";
import {EnemyType} from "../shared/domain/enemy/enemy-type.enum";
import {DungeonType} from "../shared/domain/enemy/dungeon-type.enum";

export class DungeonSettings {
  public static LAST_DUNGEON = DungeonType.DESERT;

  public static MAX_DUNGEONS_LEVELS: Map<DungeonType, number> = new Map<DungeonType, number>([
    [DungeonType.FOREST, 8],
    [DungeonType.DESERT, 10]
  ]);

  public static DUNGEONS_BACKGROUNDS: Map<DungeonType, string> = new Map<DungeonType, string>([
    [DungeonType.FOREST, 'assets/images/places/dungeon-forest.jpg'],
    [DungeonType.DESERT, 'assets/images/places/dungeon-desert.jpg']
  ]);

  private static FOREST_ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [new EnemyTypeProbability(1, EnemyType.TROGLODYTE)]],
    [2, [new EnemyTypeProbability(1, EnemyType.TROGLODYTE)]],
    [3, [new EnemyTypeProbability(1, EnemyType.TROGLODYTE)]],
    [4, [new EnemyTypeProbability(0.8, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.2, EnemyType.BEHEMOT)]],
    [5, [new EnemyTypeProbability(0.6, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.4, EnemyType.BEHEMOT)]],
    [6, [new EnemyTypeProbability(0.6, EnemyType.BEHEMOT), new EnemyTypeProbability(0.3, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [7, [new EnemyTypeProbability(0.8, EnemyType.BEHEMOT), new EnemyTypeProbability(0.1, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [8, [new EnemyTypeProbability(0.8, EnemyType.BEHEMOT), new EnemyTypeProbability(0.1, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]]
  ]);

  private static DESERT_ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [new EnemyTypeProbability(0.6, EnemyType.BEHEMOT), new EnemyTypeProbability(0.3, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [2, [new EnemyTypeProbability(0.8, EnemyType.BEHEMOT), new EnemyTypeProbability(0.1, EnemyType.TROGLODYTE), new EnemyTypeProbability(0.1, EnemyType.DRAGON)]],
    [3, [new EnemyTypeProbability(0.8, EnemyType.BEHEMOT), new EnemyTypeProbability(0.2, EnemyType.DRAGON)]],
    [4, [new EnemyTypeProbability(0.6, EnemyType.BEHEMOT), new EnemyTypeProbability(0.4, EnemyType.DRAGON)]],
    [5, [new EnemyTypeProbability(0.6, EnemyType.DRAGON), new EnemyTypeProbability(0.4, EnemyType.BEHEMOT)]],
    [6, [new EnemyTypeProbability(0.8, EnemyType.DRAGON), new EnemyTypeProbability(0.2, EnemyType.BEHEMOT)]],
    [7, [new EnemyTypeProbability(1, EnemyType.DRAGON)]],
    [8, [new EnemyTypeProbability(1, EnemyType.DRAGON)]],
    [9, [new EnemyTypeProbability(1, EnemyType.DRAGON)]],
    [10, [new EnemyTypeProbability(1, EnemyType.BOSS)]]
  ]);

  public static ENEMY_PROBABILITY_MAP: Map<DungeonType, Map<number, EnemyTypeProbability[]>> = new Map([
    [DungeonType.FOREST, DungeonSettings.FOREST_ENEMY_PROBABILITY_MAP],
    [DungeonType.DESERT, DungeonSettings.DESERT_ENEMY_PROBABILITY_MAP]]);

}
