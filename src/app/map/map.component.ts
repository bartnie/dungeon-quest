import {Component} from "@angular/core";
import {Direction} from "../shared/domain/map/direction.enum";

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  direction = Direction;
}
