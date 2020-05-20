import {MapTileModel} from "../../shared/domain/map/map-tile.model";

export class MapTilesSettings {
  public static WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road.jpeg', null, false);
  public static WIDE_ROAD_TILE_VERT: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road-vert.jpeg', null, false);
  public static HALF_WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/half-wide-road.jpeg', null, false);


  public static WIDE_ROADS_SECTION_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-roads-section-down.jpeg', null, false);
  public static WIDE_ROADS_SECTION_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-roads-section-left.jpeg', null, false);


  public static WIDE_ROAD_TURN_LEFT_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road-turn-left-up.jpeg', null, false);


  public static RIVER_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/river-down.jpeg', null, false);
  public static RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/river.jpeg', null, false);
  public static RIVER_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/river-up.jpeg', null, false);
  public static WIDE_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/wide-river.jpeg', null, false);


  public static FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/forest.jpeg', null, false);
  public static TAVERN_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/map-tavern2.png',
    'assets/images/map-tiles/roads/half-wide-road.jpeg', true, '/tavern');
}
