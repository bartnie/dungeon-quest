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
        imagePath: 'https://www.xcoser.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/h/e/helmet1_1.gif'
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
        imagePath: 'https://i.mmo.cm/is/image/mmoimg/mw-product-zoom/leather-armour-with-shoulders-mercenary--mw-302021-1.jpg'
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
        imagePath: 'https://bottega.avalonceltic.com/rep_immagini/prod/935_80_lrg.jpg'
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
        imagePath: 'https://jetimages.jetcdn.net/md5/2d215f79a51cd7d94cb04ea781c949b0?odnBound=1000'
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
        imagePath: 'https://img1.cgtrader.com/items/1016709/71aafe4eb9/large/wooden-stick-branch-staff-low-poly-game-ready-asset-3d-model-2-3d-model-low-poly-max-obj-mtl-fbx.jpg'
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
        imagePath: 'https://www.militaria.pl/upload/wysiwyg/gfx/produkty/noze/ColdSteel/88HNH/Miecz_Cold_Steel_Hand_and_a_Half_Sword_88HNH-112.jpg'
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
        imagePath: 'https://www.pngkey.com/png/full/62-624715_dissidia-chaossword-final-fantasy-fire-sword.png'
      }],


      [EquipmentType.RUSTED_SHIELD, {
        slotType: SlotType.SHIELD,
        baseRarity: EquipmentRarityType.COMMON,
        health: new Range(0, 0),
        stamina: new Range(0, 0),
        offence: new Range(0, 0),
        defence: new Range(0, 2),
        armor: new Range(1, 1),
        damage: new Range(0, 0),
        value: new Range(20, 30),
        imagePath: 'https://tibiopedia.pl/images/static/items/heavily_rusted_shield.gif'
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
        imagePath: 'https://image.shutterstock.com/image-photo/old-decorative-shield-isolated-over-600w-153782261.jpg'
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
        imagePath: 'https://i.pinimg.com/474x/d2/c2/66/d2c266f82004780bf95cb97d860c7a9f.jpg'
      }]
    ]
  );

}
