import {Component, OnDestroy, OnInit} from "@angular/core";
import {DungeonService} from "../../shared/dungeon.service";
import {StatusBarType} from "../../shared/status-bar/status-bar-type.enum";
import {EnemyModel} from "../../shared/domain/enemy.model";
import {takeWhile} from "rxjs/operators";
import {HeroService} from "../../shared/hero.service";

@Component({
  selector: 'app-dungeon-enemy',
  templateUrl: './dungeon-enemy.component.html',
  styleUrls: ['./dungeon-enemy.component.scss']
})
export class DungeonEnemyComponent implements OnInit, OnDestroy {
  private statusBarType = StatusBarType;
  private currentEnemy: EnemyModel;
  private componentActive: boolean;

  constructor(private dungeonService: DungeonService, private heroService: HeroService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.dungeonService.currentEnemy.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (enemy: EnemyModel) => this.currentEnemy = enemy
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
    this.dungeonService.handleHeroQuit();
  }

  get heroHealth() {
    return this.heroService.health;
  }

  get heroMaxHealth() {
    return this.heroService.maxHealth;
  }

  get heroName() {
    return this.heroService.name;
  }

  get dungeonLevel() {
    return this.dungeonService.dungeonLevel;
  }
}
