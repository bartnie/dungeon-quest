import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {EquipmentTemplate} from "../shared/domain/equipment/equipment-template.model";
import {SlotType} from "../shared/domain/equipment/slot-type.enum";
import {EquipmentRarityType} from "../shared/domain/equipment/equipment-rarity-type.enum";

export class EquipmentSettings {
  public static BAG_CAPACITY = 20;
  public static INCREASE_RARITY_THRESHOLD = 0.75;

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
      [EquipmentType.FIRE_SWORD, {
        slotType: SlotType.WEAPON,
        baseRarity: EquipmentRarityType.EPIC,
        minHealth: 0,
        maxHealth: 0,
        minStamina: 0,
        maxStamina: 20,
        minOffence: 10,
        maxOffence: 35,
        minDefence: 0,
        maxDefence: 0,
        minArmor: 0,
        maxArmor: 0,
        minDamage: 20,
        maxDamage: 28,
        minValue: 2000,
        maxValue: 2500,
        imagePath: 'https://www.pngkey.com/png/full/62-624715_dissidia-chaossword-final-fantasy-fire-sword.png'
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
