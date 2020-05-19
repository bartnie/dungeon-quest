import {MapModel} from "../shared/domain/map/map.model";
import {MapTileModel} from "../shared/domain/map/map-tile.model";
import {MapCoordinatesModel} from "../shared/domain/map/map-coordinates.model";

export class MapSettings {
  private static FOREST_TILE: MapTileModel = new MapTileModel(
    'http://systemsiege.com/images/blog/forest-tiles/7.gif', '', false);

  private static TAVERN_IN_FOREST_TILE: MapTileModel = new MapTileModel(
    'assets/images/map-tavern.png',
    'http://systemsiege.com/images/blog/forest-tiles/7.gif', true, '/tavern');

  private static MAP_0_0_TILES: MapTileModel[] = [
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.TAVERN_IN_FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE
  ];

  private static MAP_1_0_TILES: MapTileModel[] = [
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE,
    MapSettings.FOREST_TILE, MapSettings.FOREST_TILE, MapSettings.FOREST_TILE
  ];

  public static MAP_TEMPLATES: MapModel[] = [
    new MapModel(new MapCoordinatesModel(0, 0), MapSettings.MAP_0_0_TILES),
    new MapModel(new MapCoordinatesModel(1, 0), MapSettings.MAP_1_0_TILES)
  ];
}
