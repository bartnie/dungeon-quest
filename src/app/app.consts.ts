import {EnemyType} from "./shared/domain/enemy/enemy-type.enum";
import {EnemyTypeProbability} from "./shared/domain/enemy/enemy-type-probability.model";
import {EnemyTemplate} from "./shared/domain/enemy/enemy-template.model";
import {EquipmentTemplate} from "./shared/domain/equipment/equipment-template.model";
import {EquipmentType} from "./shared/domain/equipment/equipment-type.enum";
import {EquipmentRarityType} from "./shared/domain/equipment/equipment-rarity-type.enum";
import {SlotType} from "./shared/domain/equipment/slot-type.enum";

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
  public static INCREASE_RARITY_THRESHOLD = 0.9;

  public static MAX_DUNGEON_LEVEL = 9;

  public static OFFENCE_DEFENCE_BONUS_COEFFICIENT = 0.1;

  public static PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  // public static ENEMY_NAME_URL = 'https://randommer.io/api/Name?nameType=firstname&quantity=1';
  public static ENEMY_NAME_URL = 'http://names.drycodes.com/1?separator=space&nameOptions=boy_names';
  public static HERO_NAME_URL = 'http://names.drycodes.com/1?separator=space&nameOptions=boy_names';
  public static TIMEOUT = 4000;
  public static DEFAULT_HERO_NAME = 'Usual Knight';
  public static DEFAULT_ENEMY_NAME = 'Usual Monster';


  public static ENEMY_PROBABILITY_MAP: Map<number, EnemyTypeProbability[]> = new Map([
    [1, [{probability: 0.8, enemyType: EnemyType.TROGLODYTE}, {probability: 0.2, enemyType: EnemyType.BEHEMOT}]],
    [2, [{probability: 0.6, enemyType: EnemyType.TROGLODYTE}, {probability: 0.4, enemyType: EnemyType.BEHEMOT}]],
    [3, [{probability: 0.6, enemyType: EnemyType.BEHEMOT}, {
      probability: 0.3,
      enemyType: EnemyType.TROGLODYTE
    }, {probability: 0.1, enemyType: EnemyType.DRAGON}]],
    [4, [{probability: 0.8, enemyType: EnemyType.BEHEMOT}, {
      probability: 0.1,
      enemyType: EnemyType.TROGLODYTE
    }, {probability: 0.1, enemyType: EnemyType.DRAGON}]],
    [5, [{probability: 0.8, enemyType: EnemyType.BEHEMOT}, {probability: 0.2, enemyType: EnemyType.DRAGON}]],
    [6, [{probability: 0.6, enemyType: EnemyType.BEHEMOT}, {probability: 0.4, enemyType: EnemyType.DRAGON}]],
    [7, [{probability: 0.6, enemyType: EnemyType.DRAGON}, {probability: 0.4, enemyType: EnemyType.BEHEMOT}]],
    [8, [{probability: 0.8, enemyType: EnemyType.DRAGON}, {probability: 0.2, enemyType: EnemyType.BEHEMOT}]],
    [9, [{probability: 1, enemyType: EnemyType.DRAGON}]],
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
        {probability: 0.6, equipmentType: EquipmentType.KNIGHTS_BOOTS},
        {probability: 0.4, equipmentType: EquipmentType.GALAXY_HELMET},
        {probability: 0.3, equipmentType: EquipmentType.GREAT_SWORD}],
      maxEquipmentDropped: 1,
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
        {probability: 0.8, equipmentType: EquipmentType.GREAT_SWORD},
        {probability: 0.6, equipmentType: EquipmentType.NOBLE_ARMOR},
        {probability: 0.3, equipmentType: EquipmentType.ANCIENT_SHIELD},
        {probability: 0.1, equipmentType: EquipmentType.DRAGON_ARMOR}],
      maxEquipmentDropped: 3,
      imagePath: 'https://thumbs.gfycat.com/ExcellentGoodnaturedDiscus-max-1mb.gif'
    }]
  ]);

  public static EQUIPMENT_TEMPLATES: Map<EquipmentType, EquipmentTemplate> = new Map<EquipmentType, EquipmentTemplate>(
    [
      [EquipmentType.GALAXY_HELMET, {
        slotType: SlotType.HELMET,
        baseRarity: EquipmentRarityType.COMMON,
        minHealth: 40,
        maxHealth: 50,
        minStamina: 0,
        maxStamina: 0,
        minOffence: 0,
        maxOffence: 0,
        minDefence: 0,
        maxDefence: 0,
        minArmor: 0,
        maxArmor: 0,
        minDamage: 0,
        maxDamage: 0,
        minValue: 50,
        maxValue: 60,
        imagePath: 'https://www.xcoser.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/e/helmet1_1.gif'
      }],
      [EquipmentType.NOBLE_ARMOR, {
        slotType: SlotType.ARMOR,
        baseRarity: EquipmentRarityType.RARE,
        minHealth: 0,
        maxHealth: 0,
        minStamina: 0,
        maxStamina: 0,
        minOffence: 0,
        maxOffence: 0,
        minDefence: 0,
        maxDefence: 4,
        minArmor: 4,
        maxArmor: 6,
        minDamage: 0,
        maxDamage: 0,
        minValue: 150,
        maxValue: 220,
        imagePath: 'https://bottega.avalonceltic.com/rep_immagini/prod/935_80_lrg.jpg'
      }],
      [EquipmentType.DRAGON_ARMOR, {
        slotType: SlotType.ARMOR,
        baseRarity: EquipmentRarityType.EPIC,
        minHealth: 10,
        maxHealth: 40,
        minStamina: 0,
        maxStamina: 0,
        minOffence: 0,
        maxOffence: 0,
        minDefence: 4,
        maxDefence: 8,
        minArmor: 8,
        maxArmor: 12,
        minDamage: 0,
        maxDamage: 0,
        minValue: 1500,
        maxValue: 2000,
        imagePath: 'https://jetimages.jetcdn.net/md5/2d215f79a51cd7d94cb04ea781c949b0?odnBound=1000'
      }],
      [EquipmentType.GREAT_SWORD, {
        slotType: SlotType.WEAPON,
        baseRarity: EquipmentRarityType.COMMON,
        minHealth: 0,
        maxHealth: 0,
        minStamina: 0,
        maxStamina: 0,
        minOffence: 0,
        maxOffence: 6,
        minDefence: 0,
        maxDefence: 0,
        minArmor: 0,
        maxArmor: 0,
        minDamage: 4,
        maxDamage: 8,
        minValue: 200,
        maxValue: 300,
        imagePath: 'https://www.militaria.pl/upload/wysiwyg/gfx/produkty/noze/ColdSteel/88HNH/Miecz_Cold_Steel_Hand_and_a_Half_Sword_88HNH-112.jpg'
      }],
      [EquipmentType.ANCIENT_SHIELD, {
        slotType: SlotType.SHIELD,
        baseRarity: EquipmentRarityType.LEGENDARY,
        minHealth: 30,
        maxHealth: 50,
        minStamina: 0,
        maxStamina: 20,
        minOffence: 0,
        maxOffence: 0,
        minDefence: 15,
        maxDefence: 25,
        minArmor: 20,
        maxArmor: 30,
        minDamage: 0,
        maxDamage: 0,
        minValue: 4000,
        maxValue: 6000,
        imagePath: 'https://image.shutterstock.com/image-photo/old-decorative-shield-isolated-over-600w-153782261.jpg'
      }],
      [EquipmentType.KNIGHTS_BOOTS, {
        slotType: SlotType.BOOTS,
        baseRarity: EquipmentRarityType.RARE,
        minHealth: 0,
        maxHealth: 0,
        minStamina: 30,
        maxStamina: 40,
        minOffence: 0,
        maxOffence: 0,
        minDefence: 2,
        maxDefence: 4,
        minArmor: 0,
        maxArmor: 0,
        minDamage: 0,
        maxDamage: 0,
        minValue: 60,
        maxValue: 80,
        imagePath: 'https://i.pinimg.com/474x/d2/c2/66/d2c266f82004780bf95cb97d860c7a9f.jpg'
      }]
    ]
  );
}
