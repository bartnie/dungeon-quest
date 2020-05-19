import {MapModel} from "../../shared/domain/map/map.model";
import {MapCoordinatesModel} from "../../shared/domain/map/map-coordinates.model";
import {MapRowModel} from "../../shared/domain/map/map-row.model";
import {MapTilesSettings} from "./map-tiles.settings";

export class MapSettings {

  private static MAP_0_0: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROADS_SECTION_DOWN_TILE, MapTilesSettings.WIDE_ROAD_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.TAVERN_IN_FOREST_TILE, MapTilesSettings.WIDE_ROAD_TURN_LEFT_UP_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE])
  ];

  private static MAP_1_0: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.WIDE_RIVER_TILE])
  ];


  private static MAP_0_1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE])
  ];

  public static MAP_TEMPLATES: MapModel[] = [
    new MapModel(new MapCoordinatesModel(0, 0), MapSettings.MAP_0_0),
    new MapModel(new MapCoordinatesModel(1, 0), MapSettings.MAP_1_0),
    new MapModel(new MapCoordinatesModel(0, 1), MapSettings.MAP_0_1)
  ];
}
