import {Component} from '@angular/core';
import {TrainingService} from "../shared/training.service";
import {HeroService} from "../shared/hero.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {
  statusBarTypes = StatusBarType;

  constructor(private trainingService: TrainingService, private heroService: HeroService) {
  }

  public onTrainOffence(): void {
    this.trainingService.trainOffence();
  }

  public onTrainDefence(): void {
    this.trainingService.trainDefence();
  }

  get maxStamina(): number {
    return this.heroService.maxStamina;
  }

  get stamina(): number {
    return this.heroService.stamina;
  }
}
