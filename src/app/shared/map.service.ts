import {Injectable} from "@angular/core";
import {MapCoordinatesModel} from "./domain/map/map-coordinates.model";
import {MapSettings} from "../constants/map.settings";
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

  checkPossible(relativeX: number, relativeY): boolean {
    const coordinatesToCheck = new MapCoordinatesModel(this._currentCoordinates.coordinateX + relativeX,
      this._currentCoordinates.coordinateY + relativeY);

    console.log(`${this._currentCoordinates.coordinateX}, ${this._currentCoordinates.coordinateY} + ${relativeX} , ${relativeY} => ${MapSettings.MAP_TEMPLATES.some((map: MapModel) => coordinatesToCheck.equals(map.coordinates))}`);
    return MapSettings.MAP_TEMPLATES.some((map: MapModel) => coordinatesToCheck.equals(map.coordinates));
  }

  changeMap(relativeX: number, relativeY): boolean {
    const newCoordinates = new MapCoordinatesModel(this._currentCoordinates.coordinateX + relativeX,
      this._currentCoordinates.coordinateY + relativeY);
    const newMap = MapSettings.MAP_TEMPLATES.find((map: MapModel) => this._currentCoordinates.equals(map.coordinates))
    if (newMap === undefined) return false;

    this._currentCoordinates = newCoordinates;
    this._currentMap = newMap;
    console.log('map changed')
    this.currentMap.next(this._currentMap);
  }
}
