import {MapModel} from "../shared/domain/map/map.model";
import {MapTileModel} from "../shared/domain/map/map-tile.model";
import {MapCoordinatesModel} from "../shared/domain/map/map-coordinates.model";

export class MapSettings {
  private static WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road.jpeg', '', false);
  private static WIDE_ROAD_TILE_VERT: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road-vert.jpeg', '', false);
  private static HALF_WIDE_ROAD_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/half-wide-road.jpeg', '', false);


  private static WIDE_ROADS_SECTION_DOWN_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-roads-section-down.jpeg', '', false);
  private static WIDE_ROADS_SECTION_LEFT_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-roads-section-left.jpeg', '', false);


  private static WIDE_ROAD_TURN_LEFT_UP_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/roads/wide-road-turn-left-up.jpeg', '', false);


  private static RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/river.jpeg', '', false);
  private static WIDE_RIVER_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/rivers/wide-river.jpeg', '', false);


  private static FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/forest.jpeg', '', false);
  private static TAVERN_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tiles/map-tavern.png',
    'assets/images/map-tiles/roads/half-wide-road.jpeg', true, '/tavern');

  private static MAP_0_0_TILES: MapTileModel[] = [
    MapSettings.WIDE_ROAD_TILE, MapSettings.WIDE_ROAD_TILE, MapSettings.WIDE_ROADS_SECTION_DOWN_TILE, MapSettings.WIDE_ROAD_TILE,
    MapSettings.FOREST_TILE, MapSettings.TAVERN_IN_FOREST_TILE, MapSettings.WIDE_ROAD_TURN_LEFT_UP_TILE, MapSettings.FOREST_TILE,
    MapSettings.RIVER_TILE, MapSettings.RIVER_TILE, MapSettings.RIVER_TILE, MapSettings.RIVER_TILE
  ];

  private static MAP_1_0_TILES: MapTileModel[] = [
    MapSettings.WIDE_ROAD_TILE, MapSettings.WIDE_ROAD_TILE, MapSettings.WIDE_ROAD_TILE, MapSettings.WIDE_ROAD_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.RIVER_TILE, MapSettings.RIVER_TILE, MapSettings.RIVER_TILE, MapSettings.WIDE_RIVER_TILE
  ];


  private static MAP_0_1_TILES: MapTileModel[] = [
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE
  ];

  public static MAP_TEMPLATES: MapModel[] = [
    new MapModel(new MapCoordinatesModel(0, 0), MapSettings.MAP_0_0_TILES),
    new MapModel(new MapCoordinatesModel(1, 0), MapSettings.MAP_1_0_TILES),
    new MapModel(new MapCoordinatesModel(0, 1), MapSettings.MAP_0_1_TILES)
  ];
}
