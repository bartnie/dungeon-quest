import {Component, OnDestroy, OnInit} from '@angular/core';
import {DungeonService} from "../../shared/dungeon.service";
import {EnemyModel} from "../../shared/domain/enemy.model";
import {Router} from "@angular/router";

@Component({
  templateUrl: './battle-loss-info.component.html',
  styleUrls: ['./battle-loss-info.component.scss']
})
export class BattleLossInfoComponent implements OnInit, OnDestroy {
  private defeatedEnemy: EnemyModel;
  private componentActive: boolean;

  constructor(private dungeonService: DungeonService, private router: Router) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.dungeonService.oldEnemy.subscribe(
      (enemy: EnemyModel) => {this.defeatedEnemy = enemy; console.log(enemy)}
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onGoToTavern() {
    this.router.navigate(['tavern']);
  }
}
