import {EquipmentType} from "../shared/domain/equipment/equipment-type.enum";
import {SlotType} from "../shared/domain/equipment/slot-type.enum";

export class InitialSettings {
  public static INITIAL_HEALTH = 20;
  public static INITIAL_STAMINA = 50;
  public static INITIAL_OFFENCE = 0;
  public static INITIAL_DEFENCE = 0;
  public static INITIAL_ARMOR = 0;
  public static INITIAL_DAMAGE = 2;
  public static INITIAL_GOLD = 200;

  public static INITIAL_ITEMS: Map<SlotType, EquipmentType> = new Map<SlotType, EquipmentType>([
    [SlotType.HELMET, EquipmentType.GALAXY_HELMET],
    [SlotType.WEAPON, EquipmentType.GREAT_SWORD]
  ]);
}
