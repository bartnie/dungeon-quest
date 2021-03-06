import {Injectable} from '@angular/core';
import {HeroService} from "./hero.service";
import {TrainingSettings} from "../constants/training.settings";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private heroService: HeroService) {
  }

  trainOffence(): void {
    if (this.heroService.removeStamina(TrainingSettings.STAMINA_PER_TRAINING)) {
      this.heroService.addBaseOffence(TrainingSettings.OFFENCE_PER_TRAINING);
    }
  }

  trainDefence(): void {
    if (this.heroService.removeStamina(TrainingSettings.STAMINA_PER_TRAINING)) {
      this.heroService.addBaseDefence(TrainingSettings.DEFENCE_PER_TRAINING);
    }
  }
}
