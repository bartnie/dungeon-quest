import {EnemyType} from "./shared/domain/enemy-type.enum";
import {EnemyTypeProbability} from "./shared/domain/enemy-type-probability.model";
import {EnemyTemplate} from "./shared/domain/enemy-template.model";

export class AppConstants {
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

  public static MAX_DUNGEON_LEVEL = 9;

  public static OFFENCE_DEFENCE_BONUS_COEFFICIENT = 0.1;

  public static PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  public static ENEMY_NAME_URL = 'https://randommer.io/api/Name?nameType=firstname&quantity=1';

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

  public static ENEMY_TEMPLATES: Map<EnemyType, EnemyTemplate> = new Map([
    [EnemyType.TROGLODYTE, {
      minHealth: 10,
      maxHealth: 15,
      minOffence: 2,
      maxOffence: 4,
      minDefence: 1,
      maxDefence: 4,
      minArmor: 0,
      maxArmor: 2,
      minDamage: 1,
      maxDamage: 3,
      minGold: 10,
      maxGold: 20,
      chanceToDropItem: 0.1,
      imagePath: 'https://vignette.wikia.nocookie.net/mightandmagic/images/8/89/H3CrTroglodyte.gif/revision/latest?cb=20091110232434&path-prefix=en'
    }],
    [EnemyType.BEHEMOT, {
      minHealth: 30,
      maxHealth: 40,
      minOffence: 5,
      maxOffence: 8,
      minDefence: 4,
      maxDefence: 8,
      minArmor: 3,
      maxArmor: 6,
      minDamage: 3,
      maxDamage: 5,
      minGold: 50,
      maxGold: 150,
      chanceToDropItem: 0.4,
      imagePath: 'https://www.wykop.pl/cdn/c3201142/comment_zvjbKR43H2YtrRJ1ArDAMI2QAuRRycfk.gif'
    }],
    [EnemyType.DRAGON, {
      minHealth: 100,
      maxHealth: 150,
      minOffence: 20,
      maxOffence: 30,
      minDefence: 20,
      maxDefence: 25,
      minArmor: 10,
      maxArmor: 20,
      minDamage: 15,
      maxDamage: 25,
      minGold: 200,
      maxGold: 1500,
      chanceToDropItem: 0.8,
      imagePath: 'https://thumbs.gfycat.com/ExcellentGoodnaturedDiscus-max-1mb.gif'
    }],
  ])
}


