import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatusBarType} from "../shared/status-bar/status-bar-type.enum";
import {HeroService} from "../shared/hero.service";
import {RoutingService} from "../shared/routing.service";
import {takeWhile} from "rxjs/operators";
import {HeroModel} from "../shared/domain/hero/hero.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  readonly STATUSBAR_TYPES = StatusBarType;
  stamina: number;
  maxStamina: number;
  health: number;
  maxHealth: number;
  private componentActive: boolean;

  constructor(private heroService: HeroService, private routingService: RoutingService) {
  }

  ngOnInit() {
    this.componentActive = true;
    this.heroService.hero.pipe(takeWhile(() => this.componentActive))
      .subscribe(
        (hero: HeroModel) => {
          this.stamina = hero.currentStamina;
          this.maxStamina = hero.maxStamina;
          this.health = hero.currentHealth;
          this.maxHealth = hero.maxHealth;
        });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onGoToMenu() {
    this.routingService.goToEquipmentPage();
  }
}
