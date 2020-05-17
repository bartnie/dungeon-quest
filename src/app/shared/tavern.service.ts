import {Injectable} from '@angular/core';
import {HeroService} from "./hero.service";
import {GoldService} from "./gold.service";
import {TavernSettings} from "../constants/tavern.settings";

@Injectable({
  providedIn: 'root'
})
export class TavernService {

  constructor(private heroService: HeroService, private goldService: GoldService) {
  }

  sleep(): void {
    if (this.goldService.subtractGold(TavernSettings.GOLD_PER_SLEEP)) {
      this.heroService.addStamina(TavernSettings.STAMINA_PER_SLEEP);
      this.heroService.addHealth(TavernSettings.HEALTH_PER_SLEEP);
    }
  }

  work(): void {
    if (this.heroService.removeStamina(TavernSettings.STAMINA_PER_WORK)) {
      this.goldService.addGold(TavernSettings.GOLD_PER_WORK);
    }
  }
}
