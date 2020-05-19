import {MapCoordinatesModel} from "./map-coordinates.model";
import {MapRowModel} from "./map-row.model";

export class MapModel {
  constructor(public coordinates: MapCoordinatesModel, public rows: MapRowModel[]) {
  }
}
