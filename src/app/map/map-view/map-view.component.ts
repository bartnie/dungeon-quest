import {Component, OnDestroy, OnInit} from "@angular/core";
import {MapModel} from "../../shared/domain/map/map.model";
import {MapService} from "../../shared/map.service";
import {takeWhile} from "rxjs/operators";
import {PositionService} from "../../shared/position.service";
import {PositionModel} from "../../shared/domain/map/position.model";
import {RoutingService} from "../../shared/routing.service";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnDestroy {
  map: MapModel;
  position: PositionModel;
  private componentActive: boolean;

  constructor(private mapService: MapService, private positionService: PositionService, private routingService: RoutingService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.mapService.currentMap.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (map: MapModel) => this.map = map
      );

    this.positionService.currentPosition.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (position: PositionModel) => this.position = position
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onChangePosition(changeColumn: number, changeRow: number) {
    this.positionService.changePosition(new PositionModel(changeColumn, changeRow));
  }

  onHeroClick() {
    this.routingService.goToEquipmentPage();
  }
}
