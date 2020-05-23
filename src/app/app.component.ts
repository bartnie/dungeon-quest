import {Component} from '@angular/core';
import {HeroService} from "./shared/hero.service";
import {StatusBarType} from "./shared/status-bar/status-bar-type.enum";
import {RoutingService} from "./shared/routing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statusBarType = StatusBarType;

  constructor(private heroService: HeroService, private routingService: RoutingService) {
  }

  get stamina() {
    return this.heroService.stamina;
  }

  get maxStamina() {
    return this.heroService.maxStamina;
  }

  get health() {
    return this.heroService.health;
  }

  get maxHealth() {
    return this.heroService.maxHealth;
  }

  onGoToMenu() {
    this.routingService.goToEquipmentPage();
  }
}
