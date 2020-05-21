import {Injectable} from "@angular/core";
import {MapCoordinatesModel} from "./domain/map/map-coordinates.model";
import {MapSettings} from "../constants/map/map.settings";
import {MapModel} from "./domain/map/map.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _currentCoordinates: MapCoordinatesModel;
  private _previousCoordinates: MapCoordinatesModel;
  private _currentMap: MapModel;
  currentMap: BehaviorSubject<MapModel>;


  constructor() {
    this._currentCoordinates = new MapCoordinatesModel(0, 0);
    this._currentMap = MapSettings.MAP_TEMPLATES.find((map: MapModel) => this._currentCoordinates.equals(map.coordinates))
    this.currentMap = new BehaviorSubject<MapModel>(this._currentMap);
  }

  checkPossible(relativeCoordinates: MapCoordinatesModel): boolean {
    const coordinatesToCheck = new MapCoordinatesModel(this._currentCoordinates.coordinateX + relativeCoordinates.coordinateX,
      this._currentCoordinates.coordinateY + relativeCoordinates.coordinateY);
    return MapSettings.MAP_TEMPLATES.some((map: MapModel) => coordinatesToCheck.equals(map.coordinates));
  }

  changeMap(relativeCoordinates: MapCoordinatesModel): boolean {
    const newCoordinates = new MapCoordinatesModel(this._currentCoordinates.coordinateX + relativeCoordinates.coordinateX,
      this._currentCoordinates.coordinateY + relativeCoordinates.coordinateY);
    const newMap = MapSettings.MAP_TEMPLATES.find((map: MapModel) => newCoordinates.equals(map.coordinates))
    if (newMap === undefined) return false;

    this._previousCoordinates = this._currentCoordinates;
    this._currentCoordinates = newCoordinates;
    this._currentMap = newMap;
    this.currentMap.next(this._currentMap);
    return true;
  }

  checkTileAccessible(column: number, row: number): boolean {
    if (row < 0 || row > this._currentMap.rows.length) return false;
    if (column < 0 || column > this._currentMap.rows[row].tiles.length) return false;
    return this._currentMap.rows[row].tiles[column].accessible;
  }

  rollbackLastMapChange() {
    const tempCoordinates = this._currentCoordinates;
    this._currentCoordinates = this._previousCoordinates;
    this._previousCoordinates = tempCoordinates;

    this._currentMap = MapSettings.MAP_TEMPLATES.find((map: MapModel) => this._currentCoordinates.equals(map.coordinates));
    this.currentMap.next(this._currentMap);
  }
}
