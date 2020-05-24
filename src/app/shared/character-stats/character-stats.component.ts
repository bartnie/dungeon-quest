import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {takeWhile} from "rxjs/operators";
import {HeroModel} from "../domain/hero/hero.model";

@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss']
})
export class CharacterStatsComponent implements OnInit, OnDestroy {
  name: string;
  offence: number;
  defence: number;
  armor: number;
  damage: number;
  private componentActive: boolean;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.heroService.hero.pipe(takeWhile(() => this.componentActive))
      .subscribe((hero: HeroModel) => {
        this.name = hero.name;
        this.offence = hero.offence;
        this.defence = hero.defence;
        this.armor = hero.armor;
        this.damage = hero.damage;
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
