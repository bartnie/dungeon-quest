import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MapService} from "../../shared/map.service";
import {takeWhile} from "rxjs/operators";
import {Direction} from "../../shared/domain/map/direction.enum";
import {MapCoordinatesModel} from "../../shared/domain/map/map-coordinates.model";

@Component({
  selector: 'app-map-navigation',
  templateUrl: './map-navigation.component.html',
  styleUrls: ['./map-navigation.component.scss']
})
export class MapNavigationComponent implements OnInit, OnDestroy {
  @Input() direction: Direction;
  canChangeMap: boolean = true;
  directionTypes = Direction;
  private relativeCoordinates: MapCoordinatesModel;
  private componentActive: boolean;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.createRelativeCoordinates();

    this.mapService.currentMap.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        () => this.canChangeMap = this.mapService.checkPossible(this.relativeCoordinates)
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  private createRelativeCoordinates() {
    switch (this.direction) {
      case Direction.UP:
        this.relativeCoordinates = new MapCoordinatesModel(0, 1);
        break;
      case Direction.DOWN:
        this.relativeCoordinates = new MapCoordinatesModel(0, -1);
        break;
      case Direction.RIGHT:
        this.relativeCoordinates = new MapCoordinatesModel(1, 0);
        break;
      case Direction.LEFT:
        this.relativeCoordinates = new MapCoordinatesModel(-1, 0);
        break;
    }
  }

  changeMap() {
    this.mapService.changeMap(this.relativeCoordinates);
  }
}
