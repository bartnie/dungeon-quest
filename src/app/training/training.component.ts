import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingService} from "../shared/training.service";
import {HeroService} from "../shared/hero.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";
import {takeWhile} from "rxjs/operators";
import {HeroModel} from "../shared/domain/hero/hero.model";

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {
  STATUSBAR_TYPES = StatusBarType;
  maxStamina: number;
  stamina: number;
  private componentActive: boolean;

  constructor(private trainingService: TrainingService, private heroService: HeroService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.heroService.hero.pipe(takeWhile(() => this.componentActive))
      .subscribe((hero: HeroModel) => {
        this.maxStamina = hero.maxStamina;
        this.stamina = hero.currentStamina;
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  public onTrainOffence(): void {
    this.trainingService.trainOffence();
  }

  public onTrainDefence(): void {
    this.trainingService.trainDefence();
  }
}
