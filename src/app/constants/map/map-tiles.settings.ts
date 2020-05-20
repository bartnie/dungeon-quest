import {MapTileModel} from "../../shared/domain/map/map-tile.model";

export class MapTilesSettings {
  public static WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road.jpeg', null, false);
  public static WIDE_ROAD_TILE_VERT: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road-vert.jpeg', null, false);
  public static HALF_WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/half-wide-road.jpeg', null, false);


  public static WIDE_ROADS_SECTION_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-roads-section-down.jpeg', null, false);
  public static WIDE_ROADS_SECTION_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-roads-section-left.jpeg', null, false);


  public static WIDE_ROAD_TURN_LEFT_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/roads/wide-road-turn-left-up.jpeg', null, false);


  public static RIVER_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river-down.jpeg', null, false);
  public static RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river.jpeg', null, false);
  public static RIVER_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/river-up.jpeg', null, false);
  public static WIDE_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/rivers/wide-river.jpeg', null, false);


  public static FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/forest.jpeg', null, false);
  public static TAVERN_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map/map-tavern.png',
    'assets/images/map/roads/half-wide-road.jpeg', true, '/tavern');
}
