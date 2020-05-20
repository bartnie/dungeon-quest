import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {EquipmentTemplate} from "../shared/domain/equipment/equipment-template.model";
import {SlotType} from "../shared/domain/equipment/slot-type.enum";
import {EquipmentRarityType} from "../shared/domain/equipment/equipment-rarity-type.enum";
import {Range} from "../shared/domain/util/range.model";

export class EquipmentSettings {
  public static BAG_CAPACITY = 20;
  public static INCREASE_RARITY_THRESHOLD = 0.75;

  public static EQUIPMENT_TEMPLATES: Map<EquipmentType, EquipmentTemplate> = new Map<EquipmentType, EquipmentTemplate>(
    [
      [EquipmentType.GALAXY_HELMET, {
        slotType: SlotType.HELMET,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(40, 50),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(0, 0),
        armor: new Range(0, 0),
        damage: new Range(0, 0),
        value: new Range(50, 60),
        imagePath: 'assets/images/items/galaxy-helmet.gif'
      }],


      [EquipmentType.LEATHER_ARMOR, {
        slotType: SlotType.ARMOR,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(1, 3),
        armor: new Range(0, 0),
        damage: new Range(0, 0),
        value: new Range(10, 20),
        imagePath: 'assets/images/items/leather-armor.jpg'
      }],
      [EquipmentType.NOBLE_ARMOR, {
        slotType: SlotType.ARMOR,
        baseRarity: EquipmentRarityType.RARE,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(0, 4),
        armor: new Range(4, 6),
        damage: new Range(0, 0),
        value: new Range(150, 220),
        imagePath: 'assets/images/items/noble-armor.jpg'
      }],
      [EquipmentType.DRAGON_ARMOR, {
        slotType: SlotType.ARMOR,
        baseRarity: EquipmentRarityType.EPIC,
        health: new Range(10, 40),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(4, 8),
        armor: new Range(8, 12),
        damage: new Range(0, 0),
        value: new Range(1500, 2000),
        imagePath: 'assets/images/items/dragon-armor.jpeg'
      }],


      [EquipmentType.WOODEN_STICK, {
        slotType: SlotType.WEAPON,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 2),
        defence: new Range(0, 0),
        armor: new Range(0, 0),
        damage: new Range(1, 3),
        value: new Range(10, 15),
        imagePath: 'assets/images/items/wooden-stick.jpg'
      }],
      [EquipmentType.GREAT_SWORD, {
        slotType: SlotType.WEAPON,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 6),
        defence: new Range(0, 0),
        armor: new Range(0, 0),
        damage: new Range(4, 8),
        value: new Range(200, 300),
        imagePath: 'assets/images/items/great-sword.jpg'
      }],
      [EquipmentType.FIRE_SWORD, {
        slotType: SlotType.WEAPON,
        baseRarity: EquipmentRarityType.EPIC,
        health: new Range(0, 0),
        stamina: new Range(0, 20),
        offence: new Range(10, 35),
        defence: new Range(0, 0),
        armor: new Range(0, 0),
        damage: new Range(20, 28),
        value: new Range(2000, 2500),
        imagePath: 'assets/images/items/fire-sword.png'
      }],


      [EquipmentType.RUSTY_SHIELD, {
        slotType: SlotType.SHIELD,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(0, 2),
        armor: new Range(1, 1),
        damage: new Range(0, 0),
        value: new Range(20, 30),
        imagePath: 'assets/images/items/rusty-shield.gif'
      }],
      [EquipmentType.ANCIENT_SHIELD, {
        slotType: SlotType.SHIELD,
        baseRarity: EquipmentRarityType.LEGENDARY,
        health: new Range(30, 50),
        stamina: new Range(0, 20),
        offence: new Range(0, 0),
        defence: new Range(15, 25),
        armor: new Range(20, 30),
        damage: new Range(0, 0),
        value: new Range(4000, 6000),
        imagePath: 'assets/images/items/ancient-shield.webp'
      }],


      [EquipmentType.KNIGHTS_BOOTS, {
        slotType: SlotType.BOOTS,
        baseRarity: EquipmentRarityType.RARE,
        health: new Range(0, 0),
        stamina: new Range(30, 40),
        offence: new Range(0, 0),
        defence: new Range(2, 4),
        armor: new Range(0, 0),
        damage: new Range(0, 0),
        value: new Range(60, 80),
        imagePath: 'assets/images/items/knights-boots.jpg'
      }]
    ]
  );

}
