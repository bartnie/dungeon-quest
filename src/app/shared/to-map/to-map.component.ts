import {Component} from "@angular/core";
import {RoutingService} from "../routing.service";

@Component({
  selector: 'app-to-map',
  templateUrl: './to-map.component.html',
  styleUrls: ['./to-map.component.scss']
})
export class ToMapComponent {

  constructor(private routingService: RoutingService) {
  }

  onBackToMap(){
    this.routingService.goToMap();
  }
}
