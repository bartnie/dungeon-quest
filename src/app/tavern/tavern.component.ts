import {Component} from '@angular/core';
import {HeroService} from "../shared/hero.service";
import {TavernService} from "../shared/tavern.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";

@Component({
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.scss']
})
export class TavernComponent {
  statusBarTypes = StatusBarType;

  constructor(private tavernService: TavernService, private heroService: HeroService) {
  }

  onSleep(): void {
    this.tavernService.sleep();
  }

  onWork(): void {
    this.tavernService.work();
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
