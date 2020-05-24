import {Injectable} from '@angular/core';
import {EnemyFactoryService} from "./enemy-factory.service";
import {EnemyModel} from "./domain/enemy/enemy.model";
import {GoldService} from "./gold.service";
import {EquipmentService} from "./equipment.service";
import {EquipmentModel} from "./domain/equipment/equipment.model";
import {BehaviorSubject} from "rxjs";
import {RoutingService} from "./routing.service";
import {DungeonSettings} from "../constants/dungeon.settings";
import {DigitPrecisionSettings} from "../constants/digit-precision.settings";
import {DungeonType} from "./domain/enemy/dungeon-type.enum";

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  private _dungeonCurrentLevels: Map<DungeonType, number>;
  private _dungeonMaxAchievedLevels: Map<DungeonType, number>;
  private _lastLevelsPassed: Map<DungeonType, boolean>;
  private _currentEnemies: Map<DungeonType, EnemyModel>;
  private _currentMaxLevelEnemies: Map<DungeonType, EnemyModel>;
  currentEnemies: Map<DungeonType, BehaviorSubject<EnemyModel>>;
  oldEnemies: Map<DungeonType, BehaviorSubject<EnemyModel>>;

  constructor(private enemyFactoryService: EnemyFactoryService, private goldService: GoldService, private equipmentService: EquipmentService,
              private routingService: RoutingService) {
    this._dungeonCurrentLevels = this.prepareDungeonsMap<number>();
    this._dungeonCurrentLevels.forEach((value: number, key: DungeonType, map: Map<DungeonType, number>) =>
      map.set(key, 1)
    );

    this._dungeonMaxAchievedLevels = this.prepareDungeonsMap<number>();
    this._dungeonMaxAchievedLevels.forEach((value: number, key: DungeonType, map: Map<DungeonType, number>) =>
      map.set(key, 1)
    );

    this._lastLevelsPassed = this.prepareDungeonsMap<boolean>();
    this._lastLevelsPassed.forEach((value: boolean, key: DungeonType, map: Map<DungeonType, boolean>) =>
      map.set(key, false)
    );

    this._currentEnemies = this.prepareDungeonsMap<EnemyModel>();
    this._currentEnemies.forEach((value: EnemyModel, key: DungeonType, map: Map<DungeonType, EnemyModel>) =>
      map.set(key, enemyFactoryService.prepareEnemy(key, this._dungeonCurrentLevels.get(key)))
    );

    this._currentMaxLevelEnemies = this.prepareDungeonsMap<EnemyModel>();
    this._currentMaxLevelEnemies.forEach((value: EnemyModel, key: DungeonType, map: Map<DungeonType, EnemyModel>) =>
      map.set(key, this._currentEnemies.get(key))
    );

    this.currentEnemies = this.prepareDungeonsMap<BehaviorSubject<EnemyModel>>();
    this.currentEnemies.forEach((value: BehaviorSubject<EnemyModel>, key: DungeonType, map: Map<DungeonType, BehaviorSubject<EnemyModel>>) =>
      map.set(key, new BehaviorSubject<EnemyModel>({...this._currentEnemies.get(key)}))
    );

    this.oldEnemies = this.prepareDungeonsMap<BehaviorSubject<EnemyModel>>();
    this.oldEnemies.forEach((value: BehaviorSubject<EnemyModel>, key: DungeonType, map: Map<DungeonType, BehaviorSubject<EnemyModel>>) =>
      map.set(key, new BehaviorSubject<EnemyModel>(null))
    );
  }

  getDungeonLevel(dungeonType: DungeonType): number {
    return this._dungeonCurrentLevels.get(dungeonType);
  }

  navigateDungeonLevel(dungeonType: DungeonType, change: number) {
    let currentLevel: number = this._dungeonCurrentLevels.get(dungeonType);
    const maxAchievedLevel: number = this._dungeonMaxAchievedLevels.get(dungeonType);


    if (!this.canNavigateDungeonLevel(dungeonType, change)) return;
    this.handleHeroQuit(dungeonType);

    if (currentLevel === maxAchievedLevel) {
      this._currentMaxLevelEnemies.set(dungeonType, this._currentEnemies.get(dungeonType));
    }

    currentLevel += change;
    this._dungeonCurrentLevels.set(dungeonType, currentLevel);
    if (currentLevel === maxAchievedLevel) {
      this._currentEnemies.set(dungeonType, this._currentMaxLevelEnemies.get(dungeonType));
    } else {
      this._currentEnemies.set(dungeonType, this.enemyFactoryService.prepareEnemy(dungeonType, currentLevel));
    }
    this.currentEnemies.get(dungeonType).next({...this._currentEnemies.get(dungeonType)})
  }

  canNavigateDungeonLevel(dungeonType: DungeonType, change: number) {
    const currentLevel: number = this._dungeonCurrentLevels.get(dungeonType);
    const maxAchievedLevel: number = this._dungeonMaxAchievedLevels.get(dungeonType);

    const newLevel = currentLevel + change;
    return newLevel >= 1 && newLevel <= maxAchievedLevel;
  }

  updateEnemyName(dungeonType: DungeonType, name: string) {
    const currentEnemy: EnemyModel = this._currentEnemies.get(dungeonType);
    const currentEnemySubject: BehaviorSubject<EnemyModel> = this.currentEnemies.get(dungeonType);

    currentEnemy.name = name;
    currentEnemySubject.next({...currentEnemy})
  }

  removeEnemyHealth(dungeonType: DungeonType, amount: number): boolean {
    const currentEnemy: EnemyModel = this._currentEnemies.get(dungeonType);
    const currentEnemySubject: BehaviorSubject<EnemyModel> = this.currentEnemies.get(dungeonType);

    if (currentEnemy.currentHealth <= amount) {
      currentEnemy.currentHealth = 0;
      currentEnemySubject.next({...currentEnemy})
      return false;
    }
    currentEnemy.currentHealth -= amount;
    currentEnemy.currentHealth = Math.round(
      currentEnemy.currentHealth * (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION))
      / (1 / DigitPrecisionSettings.VALUES_DIGIT_PRECISION);
    currentEnemySubject.next({...currentEnemy})
    return true;
  }

  levelPassed(dungeonType: DungeonType) {
    let firstTimeFinished = false;
    const currentLevel: number = this._dungeonCurrentLevels.get(dungeonType);
    const maxAchievedLevel: number = this._dungeonMaxAchievedLevels.get(dungeonType);
    const maxPossibleLevel: number = DungeonSettings.MAX_DUNGEONS_LEVELS.get(dungeonType);
    const lastLevelPassed: boolean = this._lastLevelsPassed.get(dungeonType);

    if (currentLevel === maxAchievedLevel
      && currentLevel != maxPossibleLevel) {
      this._dungeonCurrentLevels.set(dungeonType, currentLevel + 1);
      this._dungeonMaxAchievedLevels.set(dungeonType, maxAchievedLevel + 1);
    } else if (currentLevel === maxPossibleLevel && !lastLevelPassed) {
      this._lastLevelsPassed.set(dungeonType, true);
      firstTimeFinished = true;
    }
    this.handleLoot(dungeonType);
    this.oldEnemies.get(dungeonType).next(this._currentEnemies.get(dungeonType));
    this._currentEnemies.set(dungeonType, this.enemyFactoryService.prepareEnemy(dungeonType, this._dungeonCurrentLevels.get(dungeonType)));
    this.currentEnemies.get(dungeonType).next({...this._currentEnemies.get(dungeonType)});

    if (firstTimeFinished) {
      this.handleLastLevelPassed(dungeonType);
      return;
    }
    this.routingService.showBattleWinPage(dungeonType);
  }

  private handleLoot(dungeonType: DungeonType) {
    const currentEnemy: EnemyModel = this._currentEnemies.get(dungeonType);
    this.goldService.addGold(currentEnemy.gold);
    currentEnemy.items.forEach(
      (item: EquipmentModel) => {
        if (!this.equipmentService.addItem(item)) {
          this.goldService.sellItem(item);
          currentEnemy.goldFromDiscardedItems += item.value;
        }
      }
    );
  }

  private handleLastLevelPassed(dungeonType: DungeonType) {
    if (dungeonType === DungeonSettings.LAST_DUNGEON) {
      this.routingService.showGameFinishedPage();
    }
  }

  handleHeroQuit(dungeonType: DungeonType) {
    const currentEnemy = this._currentEnemies.get(dungeonType);
    currentEnemy.currentHealth = currentEnemy.maxHealth;
    this.currentEnemies.get(dungeonType).next({...currentEnemy})
  }

  private prepareDungeonsMap<T>(): Map<DungeonType, T> {
    const dungeonsMap = new Map<DungeonType, T>();
    for (let type of Object.keys(DungeonType)) {
      let dungeonTypeElement = DungeonType[type];

    }

    dungeonsMap.set(DungeonType.FOREST, null);
    dungeonsMap.set(DungeonType.DESERT, null);
    return dungeonsMap;
  }
}
