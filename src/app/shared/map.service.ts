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

    this._currentCoordinates = newCoordinates;
    this._currentMap = newMap;
    this.currentMap.next(this._currentMap);
    return true;
  }
}
