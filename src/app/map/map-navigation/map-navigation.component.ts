import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MapService} from "../../shared/map.service";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-map-navigation',
  templateUrl: './map-navigation.component.html',
  styleUrls: ['./map-navigation.component.scss']
})
export class MapNavigationComponent implements OnInit, OnDestroy {
  @Input() changeCoordinateX: number;
  @Input() changeCoordinateY: number;
  canChangeMap: boolean;
  private componentActive: boolean;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.mapService.currentMap.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        () => {
          console.log(this.mapService.checkPossible(this.changeCoordinateX, this.changeCoordinateY));
          this.canChangeMap = this.mapService.checkPossible(this.changeCoordinateX, this.changeCoordinateY);}
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  changeMap() {
    this.mapService.changeMap(this.changeCoordinateX, this.changeCoordinateY);
  }
}
