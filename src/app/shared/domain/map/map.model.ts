import {MapTileModel} from "./map-tile.model";
import {MapCoordinatesModel} from "./map-coordinates.model";

export class MapModel {
  constructor(public coordinates: MapCoordinatesModel, public tiles: MapTileModel[]) {
  }
}
