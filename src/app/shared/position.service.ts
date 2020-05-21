import {Injectable} from "@angular/core";
import {PositionModel} from "./domain/map/position.model";
import {BehaviorSubject} from "rxjs";
import {MapSettings} from "../constants/map/map.settings";
import {MapService} from "./map.service";
import {MapCoordinatesModel} from "./domain/map/map-coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private _currentPosition: PositionModel;
  private _previousPosition: PositionModel;
  currentPosition: BehaviorSubject<PositionModel>;
  private _heroFacingRight: boolean;
  heroFacingRight: BehaviorSubject<boolean>;

  constructor(private mapService: MapService) {
    this._heroFacingRight = MapSettings.HERO_FACING_RIGHT;
    this.heroFacingRight = new BehaviorSubject<boolean>(this._heroFacingRight);

    this._currentPosition = new PositionModel(
      MapSettings.INITIAL_COLUMN_POSITION, MapSettings.INITIAL_ROW_POSITION);
    this.currentPosition = new BehaviorSubject<PositionModel>(this._currentPosition);
  }

  changePosition(relativePosition: PositionModel): boolean {
    this._previousPosition = this._currentPosition;
    this._currentPosition = new PositionModel(this._currentPosition.column + relativePosition.column,
      this._currentPosition.row + relativePosition.row);
    this.handleHeroFacing(relativePosition);

    const mapExceed = this.checkMapExceed();
    let mapChanged = false;
    if (mapExceed) mapChanged = this.handleMapExceed();
    if (mapExceed && !mapChanged) {
      this.rollbackChanges();
      return

    }

    if (!this.mapService.checkTileAccessible(this._currentPosition.column, this._currentPosition.row)) {
      console.log(`2 - rolling back position: ${this._currentPosition.column}, ${this._currentPosition.row}`);
      this.rollbackChanges();
      console.log(`2 - rolled back position: ${this._currentPosition.column}, ${this._currentPosition.row}`);
      if (mapChanged) this.mapService.rollbackLastMapChange();
      return
    }

    this.currentPosition.next(this._currentPosition);
    return true;
  }

  private handleMapExceed(): boolean {
    let mapChanged = true;
    if (this._currentPosition.column < 0 &&
      this.changeMap(-1, 0)) {
      this._currentPosition.column = MapSettings.LAST_COLUMN_INDEX;

    } else if (this._currentPosition.column > MapSettings.LAST_COLUMN_INDEX &&
      this.changeMap(1, 0)) {
      this._currentPosition.column = 0;

    } else if (this._currentPosition.row < 0 &&
      this.changeMap(0, 1)) {
      this._currentPosition.row = MapSettings.LAST_ROW_INDEX;

    } else if (this._currentPosition.row > MapSettings.LAST_ROW_INDEX &&
      this.changeMap(0, -1)) {
      this._currentPosition.row = 0;

    } else {
      mapChanged = false;
    }
    return mapChanged;
  }

  private checkMapExceed() {
    return this._currentPosition.column < 0 ||
      this._currentPosition.column > MapSettings.LAST_COLUMN_INDEX ||
      this._currentPosition.row < 0 ||
      this._currentPosition.row > MapSettings.LAST_ROW_INDEX;
  }

  private changeMap(relativeChangeX: number, relativeChangeY: number): boolean {
    return this.mapService.changeMap(new MapCoordinatesModel(relativeChangeX, relativeChangeY));
  }

  private rollbackChanges() {
    const tempPosition = this._previousPosition;
    this._previousPosition = this._currentPosition;
    this._currentPosition = tempPosition;

    this.currentPosition.next(this._currentPosition)
  }

  private handleHeroFacing(relativePosition: PositionModel) {
    if (relativePosition.column === -1) this._heroFacingRight = false;
    else if (relativePosition.column === 1) this._heroFacingRight = true;
    else return;
    this.heroFacingRight.next(this._heroFacingRight);
  }
}
