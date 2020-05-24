import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HeroService} from "../../shared/hero.service";
import {RoutingService} from "../../shared/routing.service";

@Component({
  templateUrl: './game-finished-info.component.html',
  styleUrls: ['./game-finished-info.component.scss']
})
export class GameFinishedInfoComponent implements OnInit{
  heroName: string;

  constructor(private routingService: RoutingService, private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroName = this.heroService.getName();
  }

  onContinueAdventure() {
    this.routingService.goToMap();
  }
}
