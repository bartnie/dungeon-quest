import {Component, OnDestroy, OnInit} from "@angular/core";
import {DungeonService} from "../../shared/dungeon.service";
import {StatusBarType} from "../../shared/status-bar/status-bar-type.enum";
import {EnemyModel} from "../../shared/domain/enemy/enemy.model";
import {takeWhile, timeoutWith} from "rxjs/operators";
import {HeroService} from "../../shared/hero.service";
import {Observable, Subscriber} from "rxjs";
import {NameService} from "../../shared/name.service";
import {NameSettings} from "../../constants/name.settings";

@Component({
  selector: 'app-dungeon-enemy',
  templateUrl: './dungeon-enemy.component.html',
  styleUrls: ['./dungeon-enemy.component.scss']
})
export class DungeonEnemyComponent implements OnInit, OnDestroy {
  statusBarType = StatusBarType;
  currentEnemy: EnemyModel;
  private componentActive: boolean;

  constructor(private dungeonService: DungeonService, private heroService: HeroService, private nameService: NameService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.dungeonService.currentEnemy.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (enemy: EnemyModel) => {
          this.currentEnemy = enemy;
          if (this.currentEnemy.name === null) {
            this.setEnemyName();
          }
        }
      );
  }

  ngOnDestroy() {
    this.componentActive = false;
    this.dungeonService.handleHeroQuit();
  }

  private setEnemyName() {
    this.nameService.getEnemyName().pipe(
      takeWhile(() => this.currentEnemy.name === null && this.componentActive),
      timeoutWith(NameSettings.TIMEOUT, new Observable(
        (subscriber: Subscriber<string>) => subscriber.next(NameSettings.DEFAULT_ENEMY_NAME)
      ))
    ).subscribe((name: string) => {
        this.dungeonService.updateEnemyName(name);
      },
      (error) => {
        this.dungeonService.updateEnemyName(NameSettings.DEFAULT_ENEMY_NAME);
        console.log(error);
      }
    );
  }

  onChangeLevel(change: number) {
    this.dungeonService.navigateDungeonLevel(change);
  }

  canChangeLevel(change: number): boolean {
    return this.dungeonService.canNavigateDungeonLevel(change);
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
