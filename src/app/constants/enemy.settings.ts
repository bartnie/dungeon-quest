import {EnemyType} from "../shared/domain/enemy/enemy-type.enum";
import {EnemyTemplate} from "../shared/domain/enemy/enemy-template.model";
import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {Range} from "../shared/domain/util/range.model";

export class EnemySettings {
  public static ENEMY_TEMPLATES: Map<EnemyType, EnemyTemplate> = new Map([
    [EnemyType.TROGLODYTE, {
      health: new Range(10, 15),
      offence: new Range(2, 4),
      defence: new Range(1, 4),
      armor: new Range(0, 2),
      damage: new Range(2, 3),
      gold: new Range(10, 20),
      equipmentProbabilities: [
        {probability: 0.6, equipmentType: EquipmentType.GREAT_SWORD},
        {probability: 0.4, equipmentType: EquipmentType.GALAXY_HELMET},
        {probability: 0.3, equipmentType: EquipmentType.KNIGHTS_BOOTS}],
      maxEquipmentDropped: 2,
      imagePath: 'assets/images/enemies/troglodyte.gif'
    }],
    [EnemyType.BEHEMOT, {
      health: new Range(30, 40),
      offence: new Range(5, 8),
      defence: new Range(4, 8),
      armor: new Range(3, 6),
      damage: new Range(3, 5),
      gold: new Range(50, 150),
      equipmentProbabilities: [
        {probability: 0.7, equipmentType: EquipmentType.GREAT_SWORD},
        {probability: 0.5, equipmentType: EquipmentType.NOBLE_ARMOR},
        {probability: 0.4, equipmentType: EquipmentType.FIRE_SWORD},
        {probability: 0.4, equipmentType: EquipmentType.ANCIENT_SHIELD}],
      maxEquipmentDropped: 2,
      imagePath: 'assets/images/enemies/behemoth.gif'
    }],
    [EnemyType.DRAGON, {
      health: new Range(100, 150),
      offence: new Range(20, 30),
      defence: new Range(20, 25),
      armor: new Range(10, 20),
      damage: new Range(15, 25),
      gold: new Range(200, 1500),
      equipmentProbabilities: [
        {probability: 0.7, equipmentType: EquipmentType.FIRE_SWORD},
        {probability: 0.5, equipmentType: EquipmentType.ANCIENT_SHIELD},
        {probability: 0.4, equipmentType: EquipmentType.DRAGON_ARMOR}],
      maxEquipmentDropped: 3,
      imagePath: 'assets/images/enemies/black-dragon.gif'
    }],
    [EnemyType.BOSS, {
      health: new Range(500, 750),
      offence: new Range(50, 80),
      defence: new Range(40, 55),
      armor: new Range(30, 40),
      damage: new Range(30, 45),
      gold: new Range(2000, 5000),
      equipmentProbabilities: [
        {probability: 1, equipmentType: EquipmentType.ANCIENT_SHIELD},
        {probability: 1, equipmentType: EquipmentType.DRAGON_ARMOR}],
      maxEquipmentDropped: 5,
      imagePath: 'assets/images/enemies/boss.gif'
    }]
  ]);
}
