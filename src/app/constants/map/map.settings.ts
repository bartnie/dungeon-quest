import {MapModel} from "../../shared/domain/map/map.model";
import {MapCoordinatesModel} from "../../shared/domain/map/map-coordinates.model";
import {MapRowModel} from "../../shared/domain/map/map-row.model";
import {MapTilesSettings} from "./map-tiles.settings";

export class MapSettings {
  public static LAST_COLUMN_INDEX = 4;
  public static LAST_ROW_INDEX = 2;

  public static INITIAL_COLUMN_POSITION = 1;
  public static INITIAL_ROW_POSITION = 0;
  public static HERO_FACING_RIGHT = true;

  private static MAP_N1_1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE])
  ];
  private static MAP_0_1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE])
  ];
  private static MAP_1_1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE])
  ];


  private static MAP_N1_0: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.DUNGEON_IN_FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE])
  ];
  private static MAP_0_0: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.WIDE_ROADS_SECTION_DOWN_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROADS_SECTION_DOWN_TILE, MapTilesSettings.WIDE_ROAD_TILE]),
    new MapRowModel([MapTilesSettings.BLACKSMITH_IN_FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.TAVERN_IN_FOREST_TILE, MapTilesSettings.WIDE_ROADS_SECTION_UP_TILE, MapTilesSettings.TRAINING_FIELDS_IN_FOREST_TILE]),
    new MapRowModel([MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE])
  ];
  private static MAP_1_0: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE, MapTilesSettings.WIDE_ROAD_TILE]),
    new MapRowModel([MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE, MapTilesSettings.FOREST_TILE]),
    new MapRowModel([MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.BRIDGE_RIVER_DOWN_TILE, MapTilesSettings.RIVER_DOWN_TILE, MapTilesSettings.WIDE_RIVER_TILE])
  ];


  private static MAP_N1_N1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE]),
    new MapRowModel([MapTilesSettings.WIDE_DESERT_RIVER_RIGHT_TILE, MapTilesSettings.WIDE_DESERT_RIVER_LEFT_TILE, MapTilesSettings.DESERT_RIVER_TILE, MapTilesSettings.DESERT_RIVER_TILE, MapTilesSettings.DESERT_RIVER_TILE]),
    new MapRowModel([MapTilesSettings.DUNGEON_IN_DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE])
  ];
  private static MAP_0_N1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE]),
    new MapRowModel([MapTilesSettings.DESERT_RIVER_TILE, MapTilesSettings.WIDE_DESERT_RIVER_RIGHT_TILE, MapTilesSettings.WIDE_DESERT_RIVER_TILE, MapTilesSettings.WIDE_DESERT_RIVER_TILE, MapTilesSettings.WIDE_DESERT_RIVER_TILE]),
    new MapRowModel([MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE])
  ];
  private static MAP_1_N1: MapRowModel[] = [
    new MapRowModel([MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.BRIDGE_RIVER_TILE, MapTilesSettings.RIVER_TILE, MapTilesSettings.RIVER_TILE]),
    new MapRowModel([MapTilesSettings.WIDE_DESERT_RIVER_TILE, MapTilesSettings.WIDE_DESERT_RIVER_TILE, MapTilesSettings.BRIDGE_WIDE_DESERT_RIVER_LEFT_TILE, MapTilesSettings.DESERT_RIVER_TILE, MapTilesSettings.DESERT_RIVER_TILE]),
    new MapRowModel([MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE, MapTilesSettings.DESERT_TILE])
  ];


  public static MAP_TEMPLATES: MapModel[] = [
    new MapModel(new MapCoordinatesModel(-1, -1), MapSettings.MAP_N1_N1),
    new MapModel(new MapCoordinatesModel(0, -1), MapSettings.MAP_0_N1),
    new MapModel(new MapCoordinatesModel(1, -1), MapSettings.MAP_1_N1),

    new MapModel(new MapCoordinatesModel(-1, 0), MapSettings.MAP_N1_0),
    new MapModel(new MapCoordinatesModel(0, 0), MapSettings.MAP_0_0),
    new MapModel(new MapCoordinatesModel(1, 0), MapSettings.MAP_1_0)


    // new MapModel(new MapCoordinatesModel(-1, 1), MapSettings.MAP_N1_1),
    // new MapModel(new MapCoordinatesModel(0, 1), MapSettings.MAP_0_1),
    // new MapModel(new MapCoordinatesModel(1, 1), MapSettings.MAP_1_1),


  ];
}
