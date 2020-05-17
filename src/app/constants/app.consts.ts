import {EnemyType} from "../shared/domain/enemy/enemy-type.enum";
import {EnemyTypeProbability} from "../shared/domain/enemy/enemy-type-probability.model";
import {EnemyTemplate} from "../shared/domain/enemy/enemy-template.model";
import {EquipmentTemplate} from "../shared/domain/equipment/equipment-template.model";
import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {EquipmentRarityType} from "../shared/domain/equipment/equipment-rarity-type.enum";
import {SlotType} from "../shared/domain/equipment/slot-type.enum";

export class AppConstants {

  public static OFFENCE_DEFENCE_BONUS_COEFFICIENT = 0.1;
  public static VALUES_DIGIT_PRECISION = 0.1;
  public static DAMAGE_MULTIPLIER_DIGIT_PRECISION = 0.01;

  public static MAX_BATTLE_LOGS_ENTRIES = 5;

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
  ]);

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
      equipmentProbabilities: [
        {probability: 0.6, equipmentType: EquipmentType.GREAT_SWORD},
        {probability: 0.4, equipmentType: EquipmentType.GALAXY_HELMET},
        {probability: 0.3, equipmentType: EquipmentType.KNIGHTS_BOOTS}],
      maxEquipmentDropped: 2,
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
      equipmentProbabilities: [
        {probability: 0.7, equipmentType: EquipmentType.GREAT_SWORD},
        {probability: 0.5, equipmentType: EquipmentType.NOBLE_ARMOR},
        {probability: 0.4, equipmentType: EquipmentType.FIRE_SWORD},
        {probability: 0.4, equipmentType: EquipmentType.ANCIENT_SHIELD}],
      maxEquipmentDropped: 2,
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
      equipmentProbabilities: [
        {probability: 0.7, equipmentType: EquipmentType.FIRE_SWORD},
        {probability: 0.5, equipmentType: EquipmentType.ANCIENT_SHIELD},
        {probability: 0.4, equipmentType: EquipmentType.DRAGON_ARMOR}],
      maxEquipmentDropped: 3,
      imagePath: 'https://thumbs.gfycat.com/ExcellentGoodnaturedDiscus-max-1mb.gif'
    }],
    [EnemyType.BOSS, {
      minHealth: 500,
      maxHealth: 750,
      minOffence: 50,
      maxOffence: 80,
      minDefence: 40,
      maxDefence: 55,
      minArmor: 30,
      maxArmor: 40,
      minDamage: 30,
      maxDamage: 45,
      minGold: 2000,
      maxGold: 5000,
      equipmentProbabilities: [
        {probability: 1, equipmentType: EquipmentType.ANCIENT_SHIELD},
        {probability: 1, equipmentType: EquipmentType.DRAGON_ARMOR}],
      maxEquipmentDropped: 5,
      imagePath: 'https://i.imgur.com/AG2kUgo.gif'
    }]
  ]);
}
