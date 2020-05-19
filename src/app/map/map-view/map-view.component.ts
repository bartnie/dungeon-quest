import {Component, OnDestroy, OnInit} from "@angular/core";
import {MapModel} from "../../shared/domain/map/map.model";
import {MapService} from "../../shared/map.service";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, OnDestroy {
  map: MapModel;
  private componentActive: boolean;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.mapService.currentMap.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (map: MapModel) => this.map = map
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
