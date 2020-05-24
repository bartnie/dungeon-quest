import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {DungeonService} from "../../shared/dungeon.service";
import {StatusBarType} from "../../shared/status-bar/status-bar-type.enum";
import {EnemyModel} from "../../shared/domain/enemy/enemy.model";
import {takeWhile, timeoutWith} from "rxjs/operators";
import {HeroService} from "../../shared/hero.service";
import {Observable, Subscriber} from "rxjs";
import {NameService} from "../../shared/name.service";
import {NameSettings} from "../../constants/name.settings";
import {HeroModel} from "../../shared/domain/hero/hero.model";
import {DungeonType} from "../../shared/domain/enemy/dungeon-type.enum";
import {BattleMechanicsService} from "../../shared/battle-mechanics.service";
import {DungeonSettings} from "../../constants/dungeon.settings";

@Component({
  selector: 'app-dungeon-enemy',
  templateUrl: './dungeon-enemy.component.html',
  styleUrls: ['./dungeon-enemy.component.scss']
})
export class DungeonEnemyComponent implements OnInit, OnDestroy {
  STATUSBAR_TYPES = StatusBarType;
  currentEnemy: EnemyModel;
  dungeonLevel: number;
  dungeonBackgroundLink: string;

  heroMaxHealth: number;
  heroHealth: number;
  heroName: string;
  @Input() dungeonType: DungeonType;
  private componentActive: boolean;

  constructor(private dungeonService: DungeonService, private heroService: HeroService,
              private nameService: NameService, private battleMechanicsService: BattleMechanicsService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.battleMechanicsService.beginBattle(this.dungeonType);
    this.dungeonBackgroundLink = DungeonSettings.DUNGEONS_BACKGROUNDS.get(this.dungeonType);

    this.dungeonService.currentEnemies.get(this.dungeonType).pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (enemy: EnemyModel) => {
          this.dungeonLevel = this.dungeonService.getDungeonLevel(this.dungeonType);
          this.currentEnemy = enemy;
          if (this.currentEnemy.name === null) {
            this.setEnemyName();
          }
        }
      );

    this.heroService.hero.pipe(takeWhile(() => this.componentActive))
      .subscribe((hero: HeroModel) => {
        this.heroName = hero.name;
        this.heroMaxHealth = hero.maxHealth;
        this.heroHealth = hero.currentHealth;
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
    this.battleMechanicsService.endBattle();
    this.dungeonService.handleHeroQuit(this.dungeonType);
  }

  private setEnemyName() {
    this.nameService.getEnemyName().pipe(
      takeWhile(() => this.currentEnemy.name === null && this.componentActive),
      timeoutWith(NameSettings.TIMEOUT, new Observable(
        (subscriber: Subscriber<string>) => subscriber.next(NameSettings.DEFAULT_ENEMY_NAME)
      ))
    ).subscribe((name: string) => {
        this.dungeonService.updateEnemyName(this.dungeonType, name);
      },
      (error) => {
        this.dungeonService.updateEnemyName(this.dungeonType, NameSettings.DEFAULT_ENEMY_NAME);
        console.log(error);
      }
    );
  }

  onChangeLevel(change: number) {
    this.dungeonService.navigateDungeonLevel(this.dungeonType, change);
  }

  canChangeLevel(change: number): boolean {
    return this.dungeonService.canNavigateDungeonLevel(this.dungeonType, change);
  }
}
