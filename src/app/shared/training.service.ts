import {Injectable} from '@angular/core';
import {HeroService} from "./hero.service";
import {AppConstants} from "../constants/app.consts";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private heroService: HeroService) {
  }

  trainOffence(): void {
    if (this.heroService.removeStamina(AppConstants.STAMINA_PER_TRAINING)) {
      this.heroService.addOffence(AppConstants.OFFENCE_PER_TRAINING);
    }
  }

  trainDefence(): void {
    if (this.heroService.removeStamina(AppConstants.STAMINA_PER_TRAINING)) {
      this.heroService.addDefence(AppConstants.DEFENCE_PER_TRAINING);
    }
  }
}
