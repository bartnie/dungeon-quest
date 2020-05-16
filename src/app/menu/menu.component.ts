import {Component} from '@angular/core';
import {HeroService} from "../shared/hero.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  statusBarTypes = StatusBarType;

  constructor(private heroService: HeroService) {
  }

  get maxHealth(): number {
    return this.heroService.maxHealth;
  }

  get health(): number {
    return this.heroService.health;
  }

  get maxStamina(): number {
    return this.heroService.maxStamina;
  }

  get stamina(): number {
    return this.heroService.stamina;
  }
}
