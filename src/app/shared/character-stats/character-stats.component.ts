import {Component} from '@angular/core';
import {HeroService} from "../hero.service";
import {StatsService} from "../stats.service";

@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss']
})
export class CharacterStatsComponent {

  constructor(private heroService: HeroService) {
  }

  get name() {
    return this.heroService.name;
  }

  get offence() {
    return this.heroService.offence;
  }

  get defence() {
    return this.heroService.defence;
  }

  get armor() {
    return this.heroService.armor;
  }

  get damage() {
    return this.heroService.damage;
  }
}
