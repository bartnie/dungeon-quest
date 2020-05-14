import {Injectable} from '@angular/core';
import {HeroService} from "./hero.service";
import {AppConstants} from "../app.consts";
import {GoldService} from "./gold.service";

@Injectable({
  providedIn: 'root'
})
export class TavernService {

  constructor(private heroService: HeroService, private goldService: GoldService) {
  }

  sleep(): void {
    if (this.goldService.subtractGold(AppConstants.GOLD_PER_SLEEP)) {
      this.heroService.addStamina(AppConstants.STAMINA_PER_SLEEP);
      this.heroService.addHealth(AppConstants.HEALTH_PER_SLEEP);
    }
  }

  work(): void {
    if (this.heroService.removeStamina(AppConstants.STAMINA_PER_WORK)) {
      this.goldService.addGold(AppConstants.GOLD_PER_WORK);
    }
  }
}
