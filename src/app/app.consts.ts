import {EnemyType} from "./shared/domain/enemy-type.enum";
import {EnemyTypeProbability} from "./shared/domain/enemy-type-probability.model";

export class AppConstants {
  public static INITIAL_NAME = 'Rycerz Agata';
  public static INITIAL_HEALTH = 20;
  public static INITIAL_STAMINA = 50;
  public static INITIAL_OFFENCE = 0;
  public static INITIAL_DEFENCE = 0;
  public static INITIAL_ARMOR = 0;
  public static INITIAL_DAMAGE = 0;
  public static INITIAL_GOLD = 0;

  public static STAMINA_PER_WORK = 15;
  public static GOLD_PER_WORK = 15;

  public static STAMINA_PER_SLEEP = 25;
  public static HEALTH_PER_SLEEP = 5;
  public static GOLD_PER_SLEEP = 20;

  public static OFFENCE_PER_TRAINING = 1;
  public static DEFENCE_PER_TRAINING = 1;
  public static STAMINA_PER_TRAINING = 50;

  public static BAG_CAPACITY = 20;

  public static OFFENCE_DEFENCE_BONUS_COEFFICIENT = 0.1;
//
  public static ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [{probability: 0.8, enemyType: EnemyType.TROGLODYTE}, {probability: 0.2, enemyType: EnemyType.BEHEMOT}]],
    [2, [{probability: 0.6, enemyType: EnemyType.TROGLODYTE}, {probability: 0.4, enemyType: EnemyType.BEHEMOT}]],
    [3, [{probability: 0.6, enemyType: EnemyType.BEHEMOT}, {probability: 0.3, enemyType: EnemyType.TROGLODYTE}, {probability: 0.1, enemyType: EnemyType.DRAGON}]],
    [4, [{probability: 0.8, enemyType: EnemyType.BEHEMOT}, {probability: 0.1, enemyType: EnemyType.TROGLODYTE}, {probability: 0.1, enemyType: EnemyType.DRAGON}]],
    [5, [{probability: 0.8, enemyType: EnemyType.BEHEMOT}, {probability: 0.2, enemyType: EnemyType.DRAGON}]],
    [6, [{probability: 0.6, enemyType: EnemyType.BEHEMOT}, {probability: 0.4, enemyType: EnemyType.DRAGON}]],
    [7, [{probability: 0.6, enemyType: EnemyType.DRAGON}, {probability: 0.4, enemyType: EnemyType.BEHEMOT}]],
    [8, [{probability: 0.8, enemyType: EnemyType.DRAGON}, {probability: 0.2, enemyType: EnemyType.BEHEMOT}]],
    [9, [{probability: 1, enemyType: EnemyType.DRAGON}]],
  ])
}

// http://names.drycodes.com/1?separator=space&nameOptions=boy_names
// https://uzby.com/api.php?min=3&max=5

// https://vignette.wikia.nocookie.net/mightandmagic/images/8/89/H3CrTroglodyte.gif/revision/latest?cb=20091110232434&path-prefix=en
// https://thumbs.gfycat.com/ExcellentGoodnaturedDiscus-max-1mb.gif
// https://static.wixstatic.com/media/6e2f33_c2e6aa54150f43a59fc59c109de7a4e9~mv2.gif
