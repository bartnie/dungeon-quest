import {MapTileModel} from "../../shared/domain/map/map-tile.model";

export class MapTilesSettings {
  public static WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road.jpeg', null, false, true);
  public static WIDE_ROAD_VERT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road-vert.jpeg', null, false, true);
  public static HALF_WIDE_ROAD_RIGHT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/half-wide-road-right.jpeg', null, false, true);
  public static HALF_WIDE_ROAD_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/half-wide-road-left.jpeg', null, false, true);


  public static WIDE_ROADS_SECTION_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-roads-section-up.jpeg', null, false, true);
  public static WIDE_ROADS_SECTION_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-roads-section-down.jpeg', null, false, true);
  public static WIDE_ROADS_SECTION_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-roads-section-left.jpeg', null, false, true);


  public static WIDE_ROAD_TURN_LEFT_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road-turn-left-up.jpeg', null, false, true);
  public static WIDE_ROAD_TURN_UP_RIGHT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road-turn-up-right.jpeg', null, false, true);


  public static RIVER_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river-down.jpeg', null, false, false);
  public static RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river.jpeg', null, false, false);
  public static RIVER_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river-up.jpeg', null, false, false);
  public static WIDE_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/wide-river.jpeg', null, false, false);
  public static DESERT_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/desert-river.jpg', null, false, false);
  public static WIDE_DESERT_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/wide-desert-river.jpg', null, false, false);
  public static WIDE_DESERT_RIVER_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/wide-desert-river-left.jpg', null, false, false);
  public static WIDE_DESERT_RIVER_RIGHT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/wide-desert-river-right.jpg', null, false, false);


  public static BRIDGE_RIVER_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/bridge-river-down.jpeg', null, false, true);
  public static BRIDGE_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/bridge-river.jpeg', null, false, true);
  public static BRIDGE_WIDE_DESERT_RIVER_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/bridge-wide-desert-river-left.jpg', null, false, true);


  public static DESERT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/desert.jpg', null, false, true);
  public static FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/forest.jpeg', null, false, true);
  public static TAVERN_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/tavern.png',
    'assets/images/map/roads/half-wide-road-right.jpeg', true, false, '/tavern');
  public static TRAINING_FIELDS_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/training-fields.png',
    'assets/images/map/roads/half-wide-road-left.jpeg', true, false, '/training');
  public static DUNGEON_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/dungeon.png',
    'assets/images/map/forest.jpeg', true, false, '/dungeon/0');
  public static DUNGEON_IN_DESERT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/dungeon.png',
    'assets/images/map/desert.jpg', true, false, '/dungeon/1');
  public static BLACKSMITH_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/blacksmith.png',
    'assets/images/map/roads/half-wide-road-up.jpeg', true, false, '/blacksmith');
}
