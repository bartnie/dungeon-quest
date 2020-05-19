export class MapCoordinatesModel {

  constructor(public coordinateX: number, public coordinateY: number) {
  }

  equals(other: MapCoordinatesModel): boolean {
    if (other === null) return false;
    if (other === this) return true;
    return this.coordinateX === other.coordinateX
      && this.coordinateY === other.coordinateY;
  }
}
