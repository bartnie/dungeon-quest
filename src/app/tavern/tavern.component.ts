import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "../shared/hero.service";
import {TavernService} from "../shared/tavern.service";
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";
import {takeWhile} from "rxjs/operators";
import {HeroModel} from "../shared/domain/hero/hero.model";

@Component({
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.scss']
})
export class TavernComponent implements OnInit, OnDestroy {
  readonly STATUSBAR_TYPES = StatusBarType;
  maxStamina: number;
  stamina: number;
  maxHealth: number;
  health: number;
  private componentActive: boolean;

  constructor(private tavernService: TavernService, private heroService: HeroService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.heroService.hero.pipe(takeWhile(() => this.componentActive))
      .subscribe((hero: HeroModel) => {
        this.maxStamina = hero.maxStamina;
        this.stamina = hero.currentStamina;
        this.maxHealth = hero.maxHealth;
        this.health = hero.currentHealth;
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onSleep(): void {
    this.tavernService.sleep();
  }

  onWork(): void {
    this.tavernService.work();
  }

}
